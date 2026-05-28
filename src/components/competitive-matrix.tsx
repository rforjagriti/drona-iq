"use client"

import { Check, X, Shield, Award, Zap, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const features = [
  { name: "AI Learning Gap Analysis", drona: true, others: false, icon: Zap },
  { name: "Dehradun Defense Specialization", drona: true, others: false, icon: Target },
  { name: "Real-time Parent Analytics", drona: true, others: "Limited", icon: Shield },
  { name: "24/7 AI Academic Mentor", drona: true, others: false, icon: Award },
  { name: "Outcome Tracking & Predictions", drona: true, others: "Manual", icon: Target },
]

export function CompetitiveMatrix() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6 text-primary uppercase">
            Why <span className="text-accent">Drona IQ</span> Over Conventional Coaching?
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Compare our personalized AI-driven methodology against traditional local competitors.
          </p>
        </div>

        <Card className="border-2 border-primary shadow-2xl overflow-hidden max-w-5xl mx-auto">
          <Table>
            <TableHeader className="bg-primary">
              <TableRow className="hover:bg-primary border-none">
                <TableHead className="w-[300px] text-white font-headline py-6 px-8">Features & Outcomes</TableHead>
                <TableHead className="text-accent font-headline py-6 text-center text-lg">DRONA IQ</TableHead>
                <TableHead className="text-white/60 font-headline py-6 text-center">Local Competitors</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.name} className="border-b last:border-0">
                  <TableCell className="font-medium py-6 px-8 flex items-center gap-3">
                    <feature.icon className="h-5 w-5 text-accent" />
                    {feature.name}
                  </TableCell>
                  <TableCell className="text-center py-6">
                    {feature.drona === true ? (
                      <div className="flex justify-center">
                        <div className="bg-green-100 p-1.5 rounded-full">
                          <Check className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                    ) : feature.drona}
                  </TableCell>
                  <TableCell className="text-center py-6">
                    {feature.others === false ? (
                      <div className="flex justify-center">
                        <div className="bg-red-100 p-1.5 rounded-full opacity-50">
                          <X className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                    ) : (
                      <span className="text-muted-foreground font-medium">{feature.others}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="bg-accent/10 p-4 text-center">
            <p className="text-sm font-semibold text-primary">
              * Based on local benchmarking (Jan 2024) across Dehradun coaching centers.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}