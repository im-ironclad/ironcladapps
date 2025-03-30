import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface AppInfo {
  id: string;
  name: string;
  description: string;
  logoPlaceholder?: React.ReactNode;
  link: string;
  isExternal?: boolean;
}

// Data for the application cards
const appsData: AppInfo[] = [
  {
    id: "fishturny",
    name: "FishTurny",
    description:
      "Making online fishing tournaments more accessible to anglers of all skill levels.",
    link: "https://fishturny.com", // Use the actual link
    isExternal: true, // Keep as true if it's an external link
    logoPlaceholder: (
      <div className="overflow-hidden flex h-12 w-12 p-1 shrink-0 items-center justify-center rounded-lg border text-muted-foreground">
        <img
          src="/fishturny-logo.svg"
          alt="FishTurny Logo"
          className="h-full w-full object-contain"
        />
      </div>
    ),
  },
  {
    id: "coming-soon",
    name: "Coming Soon",
    description:
      "We're cooking up more apps to solve more problems, check back for updates.",
    link: "#",
    isExternal: false,
    logoPlaceholder: (
      <div className="flex h-12 w-12 p-1 shrink-0 items-center justify-center rounded-lg border text-muted-foreground">
        {/* Placeholder for Logo */}?
      </div>
    ),
  },
];

export default function Home() {
  return (
    // Adjusted padding: less padding on small screens (p-6), more on medium and up (md:p-16 lg:p-24)
    <main className="flex min-h-screen flex-col items-center bg-background pt-12 p-6 text-foreground md:p-16 lg:p-24">
      <div className="w-full max-w-4xl">
        {" "}
        {/* Slightly reduced max-width for better centering */}
        {/* Adjusted header margins and text sizes */}
        <header className="mb-10 text-center md:mb-14">
          {/* Smaller, grey text for 'ironclad apps' */}
          <h1 className="text-sm tracking-widest text-gray-500 dark:text-gray-400">
            ironclad apps
          </h1>
          {/* Adjusted font sizes for 'Portfolio' - starts smaller */}
          <h2 className="mt-1 text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
            Portfolio
          </h2>
        </header>
        {/* Grid changes to 2 columns only on md screens and up */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {appsData.map((app) => (
            <Card
              key={app.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-sm"
            >
              {" "}
              {/* Added rounded-lg and shadow-sm */}
              {/* Adjusted CardHeader for slightly different alignment/spacing maybe */}
              <CardHeader className="flex flex-col items-start gap-4 | sm:flex-row">
                {" "}
                {/* Standardized padding */}
                {app.logoPlaceholder}
                <div className="flex-1">
                  <CardTitle className="text-lg">{app.name}</CardTitle>{" "}
                  {/* Slightly smaller title */}
                  <CardDescription className="mt-1 text-sm leading-relaxed">
                    {" "}
                    {/* Added leading-relaxed */}
                    {app.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-5 pt-0">
                {" "}
                {/* Standardized padding, remove top padding */}
                {/* Content area remains */}
              </CardContent>
              <CardFooter className="p-5 pt-0">
                {" "}
                {/* Standardized padding, remove top padding */}
                {/* Button logic adjusted: Use "Learn More" for the placeholder link too, but keep it disabled */}
                {app.id === "coming-soon" ? (
                  <Button variant="outline" disabled className="w-full">
                    Coming Soon
                  </Button>
                ) : (
                  <Button asChild variant="outline" className="w-full">
                    {app.isExternal ? (
                      <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Visit App
                      </a>
                    ) : (
                      <Link href={app.link}>Learn More</Link>
                    )}
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
