import React, { useState, useRef } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Replace these with your actual EmailJS credentials
      const serviceId = "service_636wcz8";
      const templateId = "template_irpqemh";
      const publicKey = "ZoDks7HC0Sbi-kxkH";
      
      if (serviceId === "YOUR_SERVICE_ID") {
        toast({
          title: "Configuration needed",
          description: "Please set up your EmailJS credentials in the Contact component",
          variant: "destructive",
        });
        return;
      }

      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_name: "Bhautik",
        subject: "Contact Form Submission"
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (result.text === "OK") {
        toast({
          title: "Success!",
          description: "Your message has been sent. I'll get back to you soon!",
        });
        
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper py-20">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-12">Get In Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-lg leading-relaxed">
            I'm currently looking for new opportunities. If you have a project that needs coding help, a job opportunity, or just want to chat, feel free to contact me.
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:bhautik1980@gmail.com" 
              className="flex items-center gap-3 group"
            >
              <div className="p-3 bg-secondary group-hover:bg-forest group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="link-underline">bhautik1980@gmail.com</span>
            </a>
            
            <a 
              href="tel:+917573018102" 
              className="flex items-center gap-3 group"
            >
              <div className="p-3 bg-secondary group-hover:bg-forest group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="link-underline">+91 7573018102</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/bhautik-prajapati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="p-3 bg-secondary group-hover:bg-forest group-hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="link-underline">linkedin.com/in/bhautik-prajapati</span>
            </a>
            
            <a 
              href="https://github.com/Unobhautik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="p-3 bg-secondary group-hover:bg-forest group-hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <span className="link-underline">github.com/Unobhautik</span>
            </a>
          </div>
        </div>
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <Input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-black/20 dark:border-white/20 focus:border-forest dark:focus:border-forest placeholder:text-muted-foreground dark:placeholder:text-gray-400"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="w-full border border-black/20 dark:border-white/20 focus:border-forest dark:focus:border-forest placeholder:text-muted-foreground dark:placeholder:text-gray-400"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <Textarea 
              id="message"
              name="message" 
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your message"
              className="w-full border border-black/20 dark:border-white/20 focus:border-forest dark:focus:border-forest placeholder:text-muted-foreground dark:placeholder:text-gray-400"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="bg-forest text-white px-6 py-3 w-full md:w-auto hover:bg-forest-light transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;