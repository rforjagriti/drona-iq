
"use client"

import { useMemo } from 'react';
import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Phone, Calendar, Loader2, Users } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';

export default function AdminLeads() {
  const firestore = useFirestore();
  
  const leadsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'leads'), orderBy('createdAt', 'desc'));
  }, [firestore]);

  const { data: leads, loading } = useCollection(leadsQuery);

  const stats = useMemo(() => {
    if (!leads) return { new: 0, admission: 0, home: 0, total: 0 };
    return {
      new: leads.filter(l => l.status === 'new').length,
      admission: leads.filter(l => l.type === 'admission').length,
      home: leads.filter(l => l.type === 'home_tuition').length,
      total: leads.length
    };
  }, [leads]);

  return (
    <div className="min-h-screen bg-muted/10">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold font-headline text-primary uppercase">Lead CRM Hub</h1>
            <p className="text-muted-foreground">Live student inquiries and admission pipeline.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Button className="bg-primary text-white font-headline uppercase tracking-widest text-xs font-bold px-6">Add New Lead</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Pending Review", count: stats.new, color: "text-blue-500", bg: "bg-blue-50" },
            { label: "Classroom Int", count: stats.admission, color: "text-orange-500", bg: "bg-orange-50" },
            { label: "Tuition Leads", count: stats.home, color: "text-green-500", bg: "bg-green-50" },
            { label: "Total CRM Base", count: stats.total, color: "text-accent", bg: "bg-accent/10" },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold font-headline text-primary">{stat.count}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-xl`}>
                  <Users className={`h-6 w-6 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-xl overflow-hidden">
          <CardHeader className="bg-white border-b py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <CardTitle className="font-headline text-lg uppercase">Active Pipeline</CardTitle>
            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Filter entries..." className="pl-10 h-10" />
              </div>
            </div>
          </CardHeader>
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-20 text-center"><Loader2 className="h-10 w-10 animate-spin mx-auto text-primary opacity-20" /></div>
            ) : (
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest px-8">Date</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Parent / Student</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Requirement</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Status</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest text-right px-8">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads?.map((lead: any) => (
                    <TableRow key={lead.id} className="hover:bg-muted/30">
                      <TableCell className="px-8 font-medium text-muted-foreground">
                        {new Date(lead.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{lead.parentName?.[0] || 'L'}</div>
                          <div>
                            <p className="font-bold text-primary">{lead.parentName}</p>
                            <p className="text-[10px] text-muted-foreground uppercase">{lead.studentName} • {lead.phone}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="font-bold text-primary capitalize">{lead.type?.replace('_', ' ')}</p>
                        <p className="text-[10px] text-muted-foreground uppercase">{lead.currentClass || lead.class} {lead.subject ? `• ${lead.subject}` : ''}</p>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 uppercase text-[9px] font-bold">
                          {lead.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right px-8">
                        <Button variant="ghost" size="icon"><Phone className="h-4 w-4" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {leads?.length === 0 && (
                    <TableRow><TableCell colSpan={5} className="text-center py-10 text-muted-foreground">No leads found in database.</TableCell></TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
}
