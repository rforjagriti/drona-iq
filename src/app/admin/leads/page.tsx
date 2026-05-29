"use client"

import { useMemo, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Phone, Loader2, Users, PieChart, TrendingUp, Filter } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';

export default function AdminLeads() {
  const firestore = useFirestore();
  const [filter, setFilter] = useState('');
  
  const leadsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'leads'), orderBy('createdAt', 'desc'));
  }, [firestore]);

  const { data: leads, loading } = useCollection(leadsQuery);

  const filteredLeads = useMemo(() => {
    if (!leads) return [];
    return leads.filter((l: any) => 
      l.parentName?.toLowerCase().includes(filter.toLowerCase()) ||
      l.studentName?.toLowerCase().includes(filter.toLowerCase()) ||
      l.phone?.includes(filter)
    );
  }, [leads, filter]);

  const stats = useMemo(() => {
    if (!leads) return { new: 0, admission: 0, home: 0, total: 0, conversion: '0%' };
    const newCount = leads.filter(l => l.status === 'new').length;
    const admissionCount = leads.filter(l => l.type === 'admission').length;
    const homeCount = leads.filter(l => l.type === 'home_tuition').length;
    return {
      new: newCount,
      admission: admissionCount,
      home: homeCount,
      total: leads.length,
      conversion: leads.length > 0 ? `${Math.round((leads.filter(l => l.status === 'converted').length / leads.length) * 100)}%` : '0%'
    };
  }, [leads]);

  return (
    <div className="min-h-screen bg-muted/10">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold font-headline text-primary uppercase tracking-tighter">Command Center</h1>
            <p className="text-muted-foreground font-light">Unified Lead Management & Admission CRM</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Button variant="outline" className="font-headline uppercase tracking-widest text-[10px] font-bold"><PieChart className="mr-2 h-4 w-4" /> Reports</Button>
            <Button className="bg-primary text-white font-headline uppercase tracking-widest text-[10px] font-bold px-6 shadow-xl">Add Manual Lead</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "New Inquiries", count: stats.new, color: "text-blue-500", bg: "bg-blue-50" },
            { label: "Conversion Rate", count: stats.conversion, color: "text-orange-500", bg: "bg-orange-50" },
            { label: "Total CRM Base", count: stats.total, color: "text-green-500", bg: "bg-green-50" },
            { label: "Growth Month", count: "+24%", color: "text-accent", bg: "bg-accent/10" },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold font-headline text-primary">{stat.count}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-xl`}>
                  {i === 3 ? <TrendingUp className={`h-6 w-6 ${stat.color}`} /> : <Users className={`h-6 w-6 ${stat.color}`} />}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-2xl overflow-hidden rounded-[2rem] bg-white">
          <CardHeader className="bg-white border-b py-8 px-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <CardTitle className="font-headline text-lg uppercase tracking-tight">Active Pipeline</CardTitle>
              <Badge className="bg-muted text-primary border-none">Live Data</Badge>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name or phone..." 
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="pl-12 h-12 bg-muted/20 border-none rounded-xl" 
                />
              </div>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl bg-muted/20"><Filter className="h-5 w-5" /></Button>
            </div>
          </CardHeader>
          
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-32 text-center flex flex-col items-center gap-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary opacity-20" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Fetching Encrypted Data...</p>
              </div>
            ) : (
              <Table>
                <TableHeader className="bg-muted/50 border-none">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest px-10 py-6">Date</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Parent / Student</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Requirement</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest">Status</TableHead>
                    <TableHead className="font-bold uppercase text-[10px] tracking-widest text-right px-10">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.map((lead: any) => (
                    <TableRow key={lead.id} className="hover:bg-muted/30 transition-colors border-b last:border-0 group">
                      <TableCell className="px-10 py-6 font-medium text-muted-foreground">
                        {new Date(lead.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shadow-sm">
                            {lead.parentName?.[0] || 'L'}
                          </div>
                          <div>
                            <p className="font-bold text-primary leading-tight">{lead.parentName}</p>
                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">Student: {lead.studentName} • {lead.phone}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="font-bold text-primary capitalize text-sm">{lead.type?.replace('_', ' ')}</p>
                        <p className="text-[10px] text-muted-foreground font-bold uppercase">{lead.currentClass || lead.class} {lead.subject ? `• ${lead.subject}` : ''}</p>
                      </TableCell>
                      <TableCell>
                        <Badge className={`uppercase text-[9px] font-bold px-3 py-1 border-none shadow-sm ${
                          lead.status === 'new' ? 'bg-blue-100 text-blue-700' :
                          lead.status === 'contacted' ? 'bg-orange-100 text-orange-700' :
                          lead.status === 'converted' ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'
                        }`}>
                          {lead.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right px-10">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-green-50 text-green-600"><Phone className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-primary/5 text-primary"><Search className="h-4 w-4" /></Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredLeads.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-24">
                        <div className="flex flex-col items-center gap-2">
                          <Users className="h-12 w-12 text-muted-foreground opacity-20" />
                          <p className="text-muted-foreground font-light">No records found matching your current filter.</p>
                        </div>
                      </TableCell>
                    </TableRow>
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