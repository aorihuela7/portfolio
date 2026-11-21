/** Runs before paint: stored preference, else system preference. */
export const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;if(d){r.classList.add("dark")}r.style.colorScheme=d?"dark":"light"}catch(e){}})();`;
