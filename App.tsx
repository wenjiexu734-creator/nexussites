import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Menu, 
  X,
  ChevronDown,
  Play,
  Star,
  Globe,
  MessageSquare,
  Loader2,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setEmail("");
  };

  useEffect(() => {
    if (!isSignupOpen) {
      setTimeout(resetForm, 300); // Reset after modal close animation
    }
  }, [isSignupOpen]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="text-primary-foreground w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">NexusFlow</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
              <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => setIsSignupOpen(true)}>Log in</Button>
              <Button size="sm" className="rounded-full px-6" onClick={() => setIsSignupOpen(true)}>Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-background border-b px-4 py-6 space-y-4"
          >
            <a href="#features" className="block text-lg font-medium">Features</a>
            <a href="#how-it-works" className="block text-lg font-medium">How it Works</a>
            <a href="#testimonials" className="block text-lg font-medium">Testimonials</a>
            <a href="#pricing" className="block text-lg font-medium">Pricing</a>
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full" onClick={() => { setIsSignupOpen(true); setIsMenuOpen(false); }}>Log in</Button>
              <Button className="w-full" onClick={() => { setIsSignupOpen(true); setIsMenuOpen(false); }}>Get Started</Button>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div variants={fadeIn}>
                <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                  ✨ AI-Powered Workflow Automation
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1]"
              >
                Automate your work <br />
                <span className="text-primary">without the complexity.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-xl text-muted-foreground mb-10 leading-relaxed"
              >
                NexusFlow helps teams build powerful automated workflows in minutes. 
                Connect your tools, apply AI logic, and scale your operations effortlessly.
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button size="lg" className="rounded-full px-8 h-14 text-lg group" onClick={() => setIsSignupOpen(true)}>
                  Start for free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" onClick={() => setIsDemoOpen(true)}>
                  <Play className="mr-2 w-4 h-4 fill-current" />
                  Watch Demo
                </Button>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  No credit card required
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  14-day free trial
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image/Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-16 relative"
            >
              <div className="rounded-2xl border bg-card shadow-2xl overflow-hidden aspect-video max-w-5xl mx-auto relative group">
                <img 
                  src="https://picsum.photos/seed/nexusflow-dashboard/1920/1080" 
                  alt="NexusFlow Dashboard Preview" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div 
                    className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => setIsDemoOpen(true)}
                  >
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-6 -left-6 hidden lg:block">
                <Card className="p-4 shadow-xl border-primary/20 rotate-[-4deg]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Workflow Active</p>
                      <p className="text-[10px] text-muted-foreground">Saved 4.2 hours today</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="absolute -bottom-6 -right-6 hidden lg:block">
                <Card className="p-4 shadow-xl border-primary/20 rotate-[4deg]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Team Joined</p>
                      <p className="text-[10px] text-muted-foreground">+12 new members</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof / Logos */}
        <section className="py-12 border-y bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
              Trusted by 2,000+ forward-thinking companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              {['Acme Corp', 'GlobalTech', 'Innovate', 'Stellar', 'Pulse'].map((logo) => (
                <span key={logo} className="text-2xl font-display font-bold tracking-tighter">{logo}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-base font-semibold text-primary uppercase tracking-wide mb-3">Features</h2>
              <p className="text-4xl md:text-5xl font-display font-bold mb-6">Everything you need to automate at scale.</p>
              <p className="text-lg text-muted-foreground">
                NexusFlow combines powerful automation with intuitive design. 
                No coding required, just pure productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Lightning Fast",
                  description: "Deploy workflows in seconds with our pre-built templates and intuitive drag-and-drop builder."
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Enterprise Secure",
                  description: "Bank-grade encryption and SOC2 compliance ensure your data and workflows are always protected."
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Deep Analytics",
                  description: "Track every execution, identify bottlenecks, and measure the ROI of your automations in real-time."
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Global Connectivity",
                  description: "Connect to over 1,000+ apps and services including Slack, Salesforce, and Google Workspace."
                },
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "AI Logic",
                  description: "Use natural language to describe complex conditions and let our AI handle the logic for you."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Team Collaboration",
                  description: "Work together on workflows with shared folders, version control, and granular permissions."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-none hover:bg-muted/50 transition-colors group">
                    <CardContent className="pt-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works / Split Section */}
        <section id="how-it-works" className="py-24 lg:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-base font-semibold text-primary uppercase tracking-wide mb-3">How it works</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                  From idea to automation in three simple steps.
                </h3>
                
                <div className="space-y-10">
                  {[
                    {
                      step: "01",
                      title: "Connect your apps",
                      description: "Choose from our library of 1,000+ integrations. Authenticate with a click and you're ready to go."
                    },
                    {
                      step: "02",
                      title: "Design your flow",
                      description: "Use our visual builder to map out your process. Add triggers, actions, and AI-powered logic steps."
                    },
                    {
                      step: "03",
                      title: "Launch and scale",
                      description: "Activate your workflow and watch it run. Monitor performance and scale as your business grows."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="text-4xl font-display font-bold text-primary/20">{item.step}</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="mt-12 rounded-full px-8" onClick={() => setIsSignupOpen(true)}>
                  Get Started Now
                </Button>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border bg-card">
                  <img 
                    src="https://picsum.photos/seed/workflow-builder/800/1000" 
                    alt="Workflow Builder Interface" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-base font-semibold text-primary uppercase tracking-wide mb-3">Testimonials</h2>
              <p className="text-4xl md:text-5xl font-display font-bold mb-6">Loved by teams worldwide.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "NexusFlow has completely transformed how our marketing team operates. We've automated 80% of our lead routing.",
                  author: "Sarah Jenkins",
                  role: "Head of Marketing, TechFlow",
                  avatar: "https://picsum.photos/seed/sarah/100/100"
                },
                {
                  quote: "The AI logic features are a game-changer. We can now handle complex customer requests without manual intervention.",
                  author: "Michael Chen",
                  role: "CTO, Innovate Solutions",
                  avatar: "https://picsum.photos/seed/michael/100/100"
                },
                {
                  quote: "Best automation tool I've used. The interface is clean, and the support team is incredibly responsive.",
                  author: "Elena Rodriguez",
                  role: "Operations Manager, GlobalScale",
                  avatar: "https://picsum.photos/seed/elena/100/100"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-muted/30 border-none">
                  <CardContent className="pt-8">
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg italic mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-base font-semibold text-primary uppercase tracking-wide mb-3">Pricing</h2>
              <p className="text-4xl md:text-5xl font-display font-bold mb-6">Simple, transparent pricing.</p>
              <p className="text-lg text-muted-foreground">
                Choose the plan that's right for your team. All plans include a 14-day free trial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$0",
                  description: "Perfect for individuals and small projects.",
                  features: ["5 active workflows", "100 executions / mo", "Basic AI logic", "Community support"],
                  cta: "Start for free",
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$49",
                  description: "For growing teams that need more power.",
                  features: ["Unlimited workflows", "10,000 executions / mo", "Advanced AI logic", "Team collaboration", "Priority support"],
                  cta: "Start free trial",
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "Advanced security and scale for large orgs.",
                  features: ["Unlimited everything", "Dedicated account manager", "SOC2 compliance", "Custom integrations", "SLA guarantees"],
                  cta: "Contact Sales",
                  popular: false
                }
              ].map((plan, index) => (
                <Card key={index} className={`relative flex flex-col h-full border-2 ${plan.popular ? 'border-primary shadow-xl scale-105 z-10' : 'border-border shadow-none'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Badge className="rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="pt-10 flex-grow">
                    <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-display font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                    </div>
                    <p className="text-muted-foreground mb-8 text-sm">
                      {plan.description}
                    </p>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button 
                      className="w-full rounded-xl h-12 text-lg font-bold" 
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => setIsSignupOpen(true)}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How does the 14-day free trial work?",
                  a: "You get full access to all premium features for 14 days. No credit card is required to start. At the end of the trial, you can choose a plan that fits your needs."
                },
                {
                  q: "Can I connect my own custom APIs?",
                  a: "Yes! NexusFlow supports custom HTTP requests and webhooks, allowing you to connect to any service with an API."
                },
                {
                  q: "Is my data secure?",
                  a: "Absolutely. We use enterprise-grade encryption and are SOC2 Type II compliant. Your data never leaves our secure environment unless you explicitly send it to another app."
                },
                {
                  q: "Do you offer discounts for non-profits?",
                  a: "Yes, we offer a 50% discount for registered non-profit organizations. Contact our sales team to learn more."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary z-0"></div>
          <div className="absolute inset-0 opacity-10 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-8">
              Ready to automate your future?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
              Join thousands of teams who are saving hours every week with NexusFlow. 
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-bold" onClick={() => setIsSignupOpen(true)}>
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-bold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => setIsSignupOpen(true)}>
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="text-primary-foreground w-5 h-5 fill-current" />
                </div>
                <span className="text-xl font-display font-bold tracking-tight">NexusFlow</span>
              </div>
              <p className="text-muted-foreground mb-8 max-w-xs">
                The next generation of workflow automation. Built for teams that move fast.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  <Users className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 NexusFlow Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Status</a>
              <a href="#" className="hover:text-primary transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Modals */}
      <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-2xl">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="signup-form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-display font-bold">Join the NexusFlow Waitlist</DialogTitle>
                  <DialogDescription>
                    We're currently in private beta. Leave your email and we'll notify you as soon as a spot opens up.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSignup} className="space-y-6 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="you@example.com" 
                        className="pl-10 h-12"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg font-bold rounded-xl" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Get Early Access"
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">You're on the list!</h3>
                <p className="text-muted-foreground mb-8">
                  Thanks for your interest in NexusFlow. We'll be in touch shortly with your invitation.
                </p>
                <Button variant="outline" className="w-full h-12 rounded-xl" onClick={() => setIsSignupOpen(false)}>
                  Close
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-black border-none rounded-2xl">
          <div className="aspect-video w-full relative">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="NexusFlow Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
