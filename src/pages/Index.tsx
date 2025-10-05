import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SolutionsOverview from "@/components/SolutionsOverview";
import SolutionSection from "@/components/SolutionSection";
import OutcomesMetrics from "@/components/OutcomesMetrics";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Users, MessageSquare, HeartHandshake } from "lucide-react";

import studentsEvents from "@/assets/students-events.png";
import leadersDashboard from "@/assets/leaders-dashboard.png";
import adminWorkflow from "@/assets/admin-workflow.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero />
      
      <SolutionsOverview />
      
      {/* Students Section */}
      <SolutionSection
        title="Make it easy to find their place"
        bullets={[
          "Discover relevant groups and events tailored to their interests",
          "Quick RSVP with one tap—no email threads or third-party forms",
          "Automatic attendance tracking for co-curricular records",
          "Optional points and challenges to boost participation",
          "Showcase involvement for career and scholarship applications",
        ]}
        imageSrc={studentsEvents}
        imageAlt="Mobile app showing campus events with RSVP functionality"
        bgLight={false}
      />

      {/* Leaders Section */}
      <SolutionSection
        title="Give leaders the tools to run great orgs"
        bullets={[
          "Manage members and track engagement in one dashboard",
          "Plan events with built-in promotion and registration",
          "Send targeted messages to specific groups or the whole campus",
          "Simple budgeting and approval workflows",
        ]}
        imageSrc={leadersDashboard}
        imageAlt="Student organization dashboard showing membership and event tools"
        imageOnRight={true}
        bgLight={true}
      />

      {/* Admins Section */}
      <SolutionSection
        title="Simplify your team's work"
        bullets={[
          "Automated workflows route approvals to the right people",
          "Leaders get notified instantly—no email bottlenecks",
          "Create hubs for orientation, conferences, and signature events",
          "Real-time analytics show what's working campus-wide",
        ]}
        imageSrc={adminWorkflow}
        imageAlt="Admin approval workflow interface"
        bgLight={false}
      />

      {/* Community Section */}
      <SolutionSection
        title="Help students connect, fast"
        bullets={[
          "Campus-wide directory makes it easy to find peers and staff",
          "Real-time chat for quick questions and coordination",
          "Browse groups by interest—clubs, sports, academics, identity",
        ]}
        icon={<Users className="w-8 h-8 text-primary" />}
        bgLight={true}
      />

      {/* Success Section */}
      <SolutionSection
        title="Guide students to the help they need"
        bullets={[
          "Book advising appointments without phone tag",
          "Resource finder for tutoring, counseling, career support",
          "Pathways and to-dos keep students on track to graduate",
          "Showcase involvement in a verified co-curricular transcript",
        ]}
        icon={<HeartHandshake className="w-8 h-8 text-primary" />}
        bgLight={false}
      />

      {/* Communications Section */}
      <SolutionSection
        title="Reach every student with the right message"
        bullets={[
          "Targeted email, push, and in-app messages from one composer",
          "Branded templates maintain your institution's voice",
          "Critical alerts get through when it matters most",
        ]}
        icon={<MessageSquare className="w-8 h-8 text-primary" />}
        bgLight={true}
      />

      <OutcomesMetrics />
      
      <HowItWorks />
      
      <Features />
      
      <Testimonials />
      
      <Pricing />
      
      <FAQ />
      
      <FinalCTA />
      
      <Footer />
    </div>
  );
};

export default Index;
