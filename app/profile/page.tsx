"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function profiles() {
  const [profiles, setProfiles] = useState([] as Profile[]);
  useEffect(() => {
    axios.get("/api/profiles").then((response) => {
      setProfiles(response.data);
    });
  });
  return (
    <main>
      <ul>
        <li> 추가 생성 </li>
      </ul>
    </main>
  );
}

}
