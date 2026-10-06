import { useMediaQuery } from "react-responsive";

// Mirrors Tailwind's `lg` breakpoint (64rem) so JS and CSS switch layouts together.
export const TABLET_QUERY = "(max-width: 63.99rem)";

export const useIsTablet = () => useMediaQuery({ query: TABLET_QUERY });
