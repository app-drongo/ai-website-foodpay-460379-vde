'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, CreditCard, Clock, MapPin, Shield, Zap } from 'lucide-react';

const DEFAULT_FEATURES = {
  sectionTitle: 'Everything You Need in One App',
  sectionSubtitle: "From craving to satisfaction - we've got every step covered",
  features: [
    {
      icon: 'Smartphone',
      title: 'Smart Ordering',
      description:
        'Browse menus, customize orders, and track delivery in real-time with our intuitive interface',
      badge: 'Popular',
    },
    {
      icon: 'CreditCard',
      title: 'Seamless Payments',
      description:
        'Pay with cards, digital wallets, or split bills with friends - all secure and instant',
      badge: 'Secure',
    },
    {
      icon: 'Clock',
      title: 'Lightning Fast Delivery',
      description:
        'Get your favorite meals delivered in 30 minutes or less with our optimized delivery network',
      badge: 'Fast',
    },
    {
      icon: 'MapPin',
      title: 'Live Tracking',
      description: 'Watch your order journey from kitchen to doorstep with precise GPS tracking',
      badge: 'Real-time',
    },
    {
      icon: 'Shield',
      title: 'Food Safety First',
      description:
        'Temperature monitoring, contactless delivery, and verified restaurant hygiene ratings',
      badge: 'Safe',
    },
    {
      icon: 'Zap',
      title: 'Smart Recommendations',
      description:
        'AI-powered suggestions based on your taste preferences, dietary needs, and order history',
      badge: 'AI-Powered',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

const iconMap = {
  Smartphone,
  CreditCard,
  Clock,
  MapPin,
  Shield,
  Zap,
};

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };

  return (
    <section id="features" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <Card
                key={idx}
                className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors duration-300 group"
              >
                <CardContent className="p-8">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">
                      <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <span data-editable={`features[${idx}].description`}>
                        {feature.description}
                      </span>
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="mt-6 pt-6 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-primary text-sm font-medium">
                      Learn more
                      <Zap className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to revolutionize your food experience?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join millions of food lovers who've made the switch to smarter ordering, faster
              delivery, and seamless payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>30-min Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
