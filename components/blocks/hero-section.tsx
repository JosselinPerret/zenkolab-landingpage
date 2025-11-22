"use client";

import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    suffix?: string;
    action?: {
      text: string;
      href: string;
    } | null;
  };
  title: string;
  description: string;
  actions: HeroAction[];
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  const { resolvedTheme } = useTheme();
  const imageSrc = resolvedTheme === "dark" ? image.dark : image.light;

  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "overflow-hidden pb-0"
      )}
    >
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-2 text-center sm:gap-4">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="gap-2">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text font-semibold text-transparent">
                  {badge.text}
                </span>
                {badge.suffix && (
                  <span className="text-muted-foreground">{badge.suffix}</span>
                )}
                {badge.action && (
                  <a href={badge.action.href} className="flex items-center gap-1">
                    {badge.action.text}
                    <ArrowRightIcon className="h-3 w-3" />
                  </a>
                )}
              </Badge>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-md relative z-10 max-w-[550px] font-medium text-muted-foreground sm:text-xl"
          >
            {description}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-10 flex justify-center gap-4"
          >
            {actions.map((action, index) => {
              if (index === 0) {
                return (
                  <RainbowButton key={index} asChild>
                    <a href={action.href} className="flex items-center gap-2">
                      {action.icon}
                      {action.text}
                    </a>
                  </RainbowButton>
                );
              }
              return (
                <Button key={index} variant={action.variant} size="lg" asChild>
                  <a href={action.href} className="flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </a>
                </Button>
              );
            })}
          </motion.div>

          {/* Image with Glow */}
          <div className="relative pt-12">
            <MockupFrame
              className=""
              size="small"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                  <Mockup type="responsive">
                    <Image
                      src={imageSrc}
                      alt={image.alt}
                      width={1248}
                      height={765}
                      priority
                    />
                  </Mockup>
              </motion.div>
            </MockupFrame>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <Glow
                variant="top"
                className="opacity-100"
                />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
