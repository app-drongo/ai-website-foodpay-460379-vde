'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brandName: 'FoodFlow',
  tagline: 'Order, Pay, Enjoy - All in One Seamless Food Experience',
  description:
    'Your ultimate food delivery super app connecting you with the best restaurants in your area.',

  // Company Section
  companyTitle: 'Company',
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],

  // Legal Section
  legalTitle: 'Legal',
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],

  // Social Section
  socialTitle: 'Follow Us',
  socialLinks: [
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  ],

  // Contact Info
  contactTitle: 'Contact',
  address: '123 Food Street, Delivery City, DC 12345',
  phone: '+1 (555) 123-FOOD',
  email: 'hello@foodflow.com',

  // Newsletter
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest deals and restaurant updates',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',

  // Copyright
  copyrightText: '© 2024 FoodFlow. All rights reserved.',

  // App Download
  downloadTitle: 'Download Our App',
  downloadDescription: 'Get the best food delivery experience on mobile',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const renderSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'instagram':
        return <Instagram className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer id="footer" className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-2">
              <span data-editable="brandName">{config.brandName}</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              <span data-editable="tagline">{config.tagline}</span>
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span data-editable="address">{config.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span data-editable="phone">{config.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span data-editable="email">{config.email}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">
              <span data-editable="companyTitle">{config.companyTitle}</span>
            </h4>
            <ul className="space-y-2">
              {config.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-primary justify-start"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">
              <span data-editable="legalTitle">{config.legalTitle}</span>
            </h4>
            <ul className="space-y-2">
              {config.legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-primary justify-start"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`legalLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">
              <span data-editable="socialTitle">{config.socialTitle}</span>
            </h4>
            <div className="flex gap-3 mb-6">
              {config.socialLinks.map((social, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => handleLinkClick(social.href)}
                  data-editable-href={`socialLinks[${idx}].href`}
                  data-href={social.href}
                  aria-label={social.label}
                >
                  {renderSocialIcon(social.icon)}
                </Button>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <h5 className="font-medium mb-2">
                <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
              </h5>
              <p className="text-sm text-muted-foreground mb-3">
                <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  data-editable="newsletterPlaceholder"
                />
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyrightText">{config.copyrightText}</span>
          </p>

          <div className="text-center sm:text-right">
            <p className="text-sm font-medium mb-1">
              <span data-editable="downloadTitle">{config.downloadTitle}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              <span data-editable="downloadDescription">{config.downloadDescription}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
