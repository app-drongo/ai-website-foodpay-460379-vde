'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  title: 'Choose Your Perfect Plan',
  subtitle: 'Start your food ordering journey with flexible pricing that grows with your appetite',
  billingToggle: true,
  monthlyLabel: 'Monthly',
  yearlyLabel: 'Yearly',
  yearlyDiscount: 'Save 20%',
  plans: [
    {
      id: 'basic',
      name: 'Food Explorer',
      description: 'Perfect for casual diners and food enthusiasts',
      icon: 'star',
      monthlyPrice: 9,
      yearlyPrice: 86,
      currency: '$',
      period: 'month',
      popular: false,
      features: [
        'Up to 10 orders per month',
        'Basic restaurant recommendations',
        'Standard delivery tracking',
        'Email support',
      ],
      ctaText: 'Start Exploring',
      ctaHref: '/signup/basic',
    },
    {
      id: 'pro',
      name: 'Foodie Pro',
      description: 'For regular diners who want premium features',
      icon: 'zap',
      monthlyPrice: 19,
      yearlyPrice: 182,
      currency: '$',
      period: 'month',
      popular: true,
      features: [
        'Unlimited orders',
        'AI-powered meal recommendations',
        'Priority delivery',
        '24/7 chat support',
        'Exclusive restaurant access',
      ],
      ctaText: 'Go Pro',
      ctaHref: '/signup/pro',
    },
    {
      id: 'enterprise',
      name: 'Restaurant Partner',
      description: 'Complete solution for restaurants and food businesses',
      icon: 'crown',
      monthlyPrice: 49,
      yearlyPrice: 470,
      currency: '$',
      period: 'month',
      popular: false,
      features: [
        'Restaurant dashboard',
        'Menu management tools',
        'Analytics & insights',
        'Custom branding',
        'Dedicated account manager',
      ],
      ctaText: 'Partner With Us',
      ctaHref: '/signup/enterprise',
    },
  ],
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [isYearly, setIsYearly] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'star':
        return Star;
      case 'zap':
        return Zap;
      case 'crown':
        return Crown;
      default:
        return Star;
    }
  };

  const handlePlanSelect = (href: string) => {
    navigate(href);
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Billing Toggle */}
          {config.billingToggle && (
            <div className="flex items-center justify-center gap-4 mb-8">
              <span
                className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                <span data-editable="monthlyLabel">{config.monthlyLabel}</span>
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                role="switch"
                aria-checked={isYearly}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                <span data-editable="yearlyLabel">{config.yearlyLabel}</span>
              </span>
              {isYearly && (
                <Badge variant="secondary" className="ml-2">
                  <span data-editable="yearlyDiscount">{config.yearlyDiscount}</span>
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.plans.map((plan, idx) => {
            const IconComponent = getIcon(plan.icon);
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <Card
                key={plan.id}
                className={`relative transition-all duration-300 hover:shadow-lg ${
                  plan.popular
                    ? 'border-primary bg-primary/5 scale-105'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 rounded-full ${
                        plan.popular
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-accent text-accent-foreground'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                  </p>

                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold">
                      <span data-editable={`plans[${idx}].currency`}>{plan.currency}</span>
                      {price}
                    </span>
                    <span className="text-muted-foreground">
                      /<span data-editable={`plans[${idx}].period`}>{plan.period}</span>
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <span data-editable={`plans[${idx}].features[${featureIdx}]`}>
                            {feature}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handlePlanSelect(plan.ctaHref)}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                    data-editable-href={`plans[${idx}].ctaHref`}
                    data-href={plan.ctaHref}
                  >
                    <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
