import { motion } from "framer-motion";
import { ArrowRight, Component, Palette, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/path/to/hero-image.jpg" alt="Hero" className="w-full h-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Deine Reichweite. Mehr Cashback.
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Entdecke Restaurants, teile deine Erlebnisse auf Instagram und erhalte Cashback.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Button size="lg" variant="default">
            <img src="/path/to/app-store-badge.png" alt="App Store" className="h-10" />
          </Button>
          <Button size="lg" variant="default">
            <img src="/path/to/google-play-badge.png" alt="Google Play" className="h-10" />
          </Button>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Component className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Restaurant aussuchen</h3>
              <p className="text-muted-foreground">
                Finde über Gainback dein neues Lieblingsrestaurant.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Instagram-Story erstellen</h3>
              <p className="text-muted-foreground">
                Markiere das Restaurant und @gainback.app, sodass wir dich finden können.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Cashback erhalten</h3>
              <p className="text-muted-foreground">
                Gönne dir bis zu 30% Cashback durch eine Instagram-Story.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Discover Restaurants Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Restaurants entdecken
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Interaktive Karte oder Liste der Partner-Restaurants mit Filteroptionen nach Standort, Küche und Angeboten.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Add restaurant previews here */}
          {/* Each restaurant should display an image, a brief description, and the cashback offered */}
        </motion.div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Über uns
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Informationen über die Mission von Gainback: Nutzern helfen, neue kulinarische Erlebnisse zu entdecken und dabei Geld zu sparen.
          </p>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Vorstellung des Teams hinter Gainback.
          </p>
        </motion.div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            FAQ
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Antworten auf häufig gestellte Fragen zur Nutzung der App, zum Cashback-Prozess und zu Partnerschaften.
          </p>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Kontakt
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Kontaktformular für Anfragen.
          </p>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Links zu Social-Media-Profilen von Gainback.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}
