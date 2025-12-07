'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Star, Clock, Users, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Your Favorite Food, One Tap Away',
  subtitle:
    'Discover thousands of restaurants, order instantly, and pay securely - all in one powerful app. Fast delivery, seamless payments, endless flavors.',
  ctaText: 'Download App',
  ctaHref: '/download',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&crop=center',
  heroImageAlt: 'Delicious food delivery app interface',
  appStoreUrl: 'https://apps.apple.com',
  playStoreUrl: 'https://play.google.com',
  trustIndicators: [
    { icon: 'restaurant', label: '50,000+ restaurants', value: '50K+' },
    { icon: 'users', label: '2M+ happy customers', value: '2M+' },
    { icon: 'clock', label: 'Average 25-min delivery', value: '25min' },
  ],
  featuredRestaurants: [
    { name: 'Bella Italia', rating: 4.8, cuisine: 'Italian' },
    { name: 'Sushi Master', rating: 4.9, cuisine: 'Japanese' },
    { name: 'Burger Palace', rating: 4.7, cuisine: 'American' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePrimaryAction = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryAction = () => {
    setIsVideoPlaying(true);
    navigate(config.secondaryCtaHref);
  };

  const renderTrustIcon = (iconType: string) => {
    switch (iconType) {
      case 'restaurant':
        return <MapPin className="h-5 w-5 text-primary" />;
      case 'users':
        return <Users className="h-5 w-5 text-primary" />;
      case 'clock':
        return <Clock className="h-5 w-5 text-primary" />;
      default:
        return <Star className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <section id="hero" className="bg-background text-foreground py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span data-editable="title">{config.title}</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {config.trustIndicators.map((indicator, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-2">{renderTrustIcon(indicator.icon)}</div>
                  <div className="font-bold text-lg sm:text-xl text-primary">
                    <span data-editable={`trustIndicators[${idx}].value`}>{indicator.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`trustIndicators[${idx}].label`}>{indicator.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryAction}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryAction}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="px-8 py-6 text-lg border-border hover:bg-accent hover:text-accent-foreground"
              >
                <Play className="h-5 w-5 mr-2" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Featured Restaurants Preview */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                Popular restaurants near you:
              </p>
              <div className="flex flex-wrap gap-2">
                {config.featuredRestaurants.map((restaurant, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground px-3 py-1"
                  >
                    <Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
                    <span data-editable={`featuredRestaurants[${idx}].name`}>
                      {restaurant.name}
                    </span>
                    <span className="ml-1 text-xs">
                      <span data-editable={`featuredRestaurants[${idx}].rating`}>
                        {restaurant.rating}
                      </span>
                    </span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] sm:aspect-square">
                  <Image
                    src={config.heroImageUrl}
                    alt={config.heroImageAlt}
                    data-editable-src="heroImageUrl"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />

                  {/* Overlay with app preview elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Floating UI elements */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">Live Orders</Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-background/95 backdrop-blur-sm rounded-lg p-3 border border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-sm font-medium">Order tracking</span>
                        </div>
                        <span className="text-xs text-muted-foreground">5 min away</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
