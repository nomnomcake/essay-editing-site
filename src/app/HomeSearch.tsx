"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { pages } from "@/content";

const c = pages.home.search;

/** The search bar under the hero. Sends the query to the FAQ page filter. */
export function HomeSearch() {
  const [value, setValue] = useState("");
  const router = useRouter();
  return (
    <SearchBar
      value={value}
      onChange={setValue}
      onSubmit={(q) => router.push(q.trim() ? `/faq?q=${encodeURIComponent(q.trim())}` : "/faq")}
      label={c.label}
      placeholder={c.placeholder}
    />
  );
}
