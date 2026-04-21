"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Portfolio", id: "portfolio" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="Kinza Graphic Designer"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitKpi
            background={{ variant: "radial-gradient" }}
            title="Professional Graphic Design That Helps Your Business Stand Out"
            description="Custom logos, branding, and visuals designed to attract customers and grow your business. Start your project today."
            kpis={[
              { value: "100+", label: "Projects Completed" },
              { value: "50+", label: "Happy Local Clients" },
              { value: "5+", label: "Years Experience" }
            ]}
            enableKpiAnimation={true}
            buttons={[
              { text: "Email Now", href: "mailto:fatimakinza673@gmail.com" },
              { text: "Get a Free Quote", href: "#contact" }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/still-life-office-desk-mess_23-2150164872.jpg"
            imageAlt="Kinza Graphic Designer Workspace"
            mediaAnimation="slide-up"
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/still-life-graphic-design-day_52683-160825.jpg", alt: "Graphic design desk" },
              { src: "http://img.b2bpic.net/free-photo/professional-studio-setup-ai-generated-content-photography-editing_482257-125507.jpg", alt: "Professional studio setup" },
              { src: "http://img.b2bpic.net/free-photo/nobody-photography-studio-with-retouching-equipment-technology-media-production-empty-workplace-image-edit-using-retouch-software-computer-office-photographer_482257-28778.jpg", alt: "Retouching studio" },
              { src: "http://img.b2bpic.net/free-photo/side-view-computer-screen-office-workspace_23-2148821932.jpg", alt: "Workspace screen" },
              { src: "http://img.b2bpic.net/free-photo/elegant-cozy-office-with-laptop-desk_23-2149636248.jpg", alt: "Cozy office" }
            ]}
            marqueeItems={[
              { type: "text", text: "Custom Branding" },
              { type: "text", text: "Logo Design" },
              { type: "text", text: "Print Design" },
              { type: "text", text: "Social Media Assets" },
              { type: "text", text: "Visual Identity" }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            useInvertedBackground={true}
            title="Designed with Purpose"
            description="Kinza is a professional graphic designer dedicated to helping local businesses thrive with beautiful, high-converting branding. I combine creative intuition with business strategy to ensure your visuals drive real results."
            metrics={[
              { value: "100%", title: "Client Satisfaction" },
              { value: "24h", title: "Avg Response Time" }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/organized-workbench-black-white-background-with-leaf-branch_23-2148296272.jpg"
            imageAlt="Kinza Graphic Designer"
            mediaAnimation="slide-up"
            metricsAnimation="slide-up"
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardTwentyEight
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { id: "1", title: "Logo Design", subtitle: "Visual identity that sticks.", category: "Branding", value: "From $299", buttons: [{ text: "Get Started", href: "#contact" }] },
              { id: "2", title: "Branding", subtitle: "Complete business identity.", category: "Design", value: "Custom Quote", buttons: [{ text: "Get Started", href: "#contact" }] },
              { id: "3", title: "Social Media", subtitle: "Graphics that engage.", category: "Digital", value: "From $150", buttons: [{ text: "Get Started", href: "#contact" }] }
            ]}
            title="Services Offered"
            description="Comprehensive design solutions tailored to help your brand compete in the local market."
          />
        </div>

        <div id="portfolio" data-section="portfolio">
          <ProductCardFour
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="one-large-left-three-stacked-right"
            useInvertedBackground={true}
            products={[
              { id: "p1", name: "Local Cafe Branding", price: "Identity", variant: "Logo & Menu", imageSrc: "http://img.b2bpic.net/free-photo/white-hoodie-mockup-front_1258-248336.jpg" },
              { id: "p2", name: "Real Estate Flyer", price: "Print", variant: "High Gloss", imageSrc: "http://img.b2bpic.net/free-vector/modern-portfolio-presentation-template_742173-32833.jpg" },
              { id: "p3", name: "E-commerce Social Set", price: "Digital", variant: "Instagram/FB", imageSrc: "http://img.b2bpic.net/free-photo/computer-screen-with-ai-program-turning-text-prompt-into-videos-results_482257-125496.jpg" },
              { id: "p4", name: "Tech Startup Logo", price: "Identity", variant: "Vector Files", imageSrc: "http://img.b2bpic.net/free-vector/connectivity-5g-technology-icons_24877-53969.jpg" },
              { id: "p5", name: "Event Poster Series", price: "Print", variant: "Full Campaign", imageSrc: "http://img.b2bpic.net/free-photo/tag-trademark-copyright-business-marketing-icon-concept_53876-123706.jpg" },
              { id: "p6", name: "Service Biz Graphics", price: "Branding", variant: "Comprehensive", imageSrc: "http://img.b2bpic.net/free-vector/cloud-rocket-logo-gradient-design_474888-2737.jpg" }
            ]}
            title="Portfolio of Work"
            description="High-quality design projects that transform local businesses."
          />
        </div>

        <div id="social" data-section="social">
          <SocialProofOne
            textboxLayout="default"
            useInvertedBackground={false}
            names={["Microsoft", "Google", "Apple", "Amazon", "Nike", "Adidas", "Shopify"]}
            title="Trusted By Local Leaders"
            description="Professional design services backed by satisfied local partners."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardThirteen
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            testimonials={[
              { id: "t1", name: "Sarah J.", handle: "Restaurant Owner", testimonial: "Kinza transformed our menu branding and we've seen 20% more engagement on social media already!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/confident-asian-businesswoman-showing-thumbs-up-standing-near-entrance-her-cafe-restaurant_1258-199354.jpg" },
              { id: "t2", name: "Mark D.", handle: "Startup Founder", testimonial: "Professional, fast, and incredibly creative. I couldn't be happier with our new brand identity.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-attractive-woman-showing-thumb-up-outdoors_1262-12526.jpg" },
              { id: "t3", name: "Linda R.", handle: "Local Retailer", testimonial: "Excellent graphic design service. Kinza really listened to my needs and delivered above expectations.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/business-woman-with-glasses-smiling_23-2148053687.jpg" },
              { id: "t4", name: "David K.", handle: "Real Estate Agent", testimonial: "The best investment for my business. The flyers look absolutely premium and professional.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-businessman-with-folded-arms-looking-camera_23-2147955314.jpg" },
              { id: "t5", name: "Elena M.", handle: "Tech Consultant", testimonial: "Efficient workflow and stunning results. Highly recommend for any business branding needs.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-middle-aged-businesswoman_23-2148204386.jpg" }
            ]}
            showRating={true}
            title="What Clients Say"
            description="Your business stands out when you invest in quality design."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqBase
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              { id: "f1", title: "How fast is the turnaround?", content: "Most projects are completed within 3-5 business days depending on complexity." },
              { id: "f2", title: "Can you design for print?", content: "Yes! I specialize in both print-ready files and digital assets for web." },
              { id: "f3", title: "Do you offer revisions?", content: "Each package includes two rounds of revisions to ensure you are 100% satisfied." }
            ]}
            title="Frequently Asked Questions"
            description="Common questions about my design process."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCTA
            useInvertedBackground={true}
            background={{ variant: "radial-gradient" }}
            tag="Contact Us"
            title="Ready to Start Your Project?"
            description="Get in touch for a free, no-obligation project consultation. Let's grow your business together."
            buttons={[
              { text: "Email: fatimakinza673@gmail.com", href: "mailto:fatimakinza673@gmail.com" },
              { text: "Get a Free Quote", href: "#" }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Kinza Graphic Designer"
            columns={[
              { title: "Quick Links", items: [{ label: "Home", href: "#hero" }, { label: "Services", href: "#services" }, { label: "Portfolio", href: "#portfolio" }] },
              { title: "Contact", items: [{ label: "Email: fatimakinza673@gmail.com", href: "mailto:fatimakinza673@gmail.com" }, { label: "Phone: +1 555 012-3456", href: "tel:+15550123456" }] }
            ]}
            copyrightText="© 2025 Kinza Graphic Designer. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
