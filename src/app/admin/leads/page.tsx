"use client"

import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, Phone, Mail, MoreHorizontal, User, Calendar, CheckCircle2 } from 'lucide-react';

const mockLeads = [
  { id: 1, parent: "Sunil Rawat", student: "Aryan", phone: "9876543210", subject: "Mathematics", locality: "Rajpur Road", status: "New Lead", date: "Oct 24" },
  { id: 2, parent: "Meena Bisht", student: "Ishita", phone: "9822114455", subject: "Physics", locality: "Jakhan", status: "Demo Scheduled", date: "Oct 23" },
  { id: 3, parent: "Col. Sharma", student: "Rohan", phone: "9123456789", subject: "NDA Prep", locality: "Vasant Vihar", status: "Converted", date: "Oct 20" },
  { id: 4, parent: "Dr. Gupta", student: "Sanya", phone: "9898989898", subject: "Chemistry", locality: "Ballupur", status: "Contacted", date: "Oct 22" },
];

export default function AdminLeads() {
  return (
    <div className="min-h-screen bg-muted/10">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold font-headline text-primary uppercase">Lead CRM Hub</h1>
            <p className="text-muted-foreground">Manage and track student admissions for 2026-27 batch.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Button className="bg-accent text-white font-headline uppercase tracking-widest text-xs font-bold px-6">Export Data</Button>
            <Button className="bg-primary text-white font-headline uppercase tracking-widest text-xs font-bold px-6">Add New Lead</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "New Leads", count: 24, color: "text-blue-500", bg: "bg-blue-50" },
            { label: "Demos Today", count: 8, color: "text-orange-500", bg: "bg-orange-50" },
            { label: "Converted", count: 142, color: "text-green-500", bg: "bg-green-50" },
            { label: "Revenue Growth", count: "+24%", color: "text-accent", bg: "bg-accent/10" },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold font-headline text-primary">{stat.count}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-xl`}>
                  <Calendar className={`h-6 w-6 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-xl overflow-hidden">
          <CardHeader className="bg-white border-b py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <CardTitle className="font-headline text-lg uppercase">Active Leads</CardTitle>
            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search parent/student..." className="pl-10 h-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]"><SelectValue placeholder="Status" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New Lead</SelectItem>
                  <SelectItem value="demo">Demo Scheduled</SelectItem>
                  <SelectItem value="conv">Converted</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="font-bold uppercase text-[10px] tracking-widest px-8">Date</TableHead>
                  <TableHead className="font-bold uppercase text-[10px] tracking-widest">Parent / Student</TableHead>
                  <TableHead className="font-bold uppercase text-[10px] tracking-widest">Subject & Location</TableHead>
                  <TableHead className="font-bold uppercase text-[10px] tracking-widest">Status</TableHead>
                  <TableHead className="font-bold uppercase text-[10px] tracking-widest text-right px-8">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLeads.map((lead) => (
                  <TableRow key={lead.id} className="hover:bg-muted/30">
                    <TableCell className="px-8 font-medium text-muted-foreground">{lead.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{lead.parent[0]}</div>
                        <div>
                          <p className="font-bold text-primary">{lead.parent}</p>
                          <p className="text-[10px] text-muted-foreground uppercase">{lead.student} • {lead.phone}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-bold text-primary">{lead.subject}</p>
                      <p className="text-[10px] text-muted-foreground uppercase">{lead.locality}</p>
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        lead.status === 'Converted' ? 'bg-green-100 text-green-700 hover:bg-green-100' :
                        lead.status === 'Demo Scheduled' ? 'bg-orange-100 text-orange-700 hover:bg-orange-100' :
                        'bg-blue-100 text-blue-700 hover:bg-blue-100'
                      }>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right px-8">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon"><Phone className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </main>
    </div>
  );
}
