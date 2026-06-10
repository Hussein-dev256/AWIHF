import { redirect } from 'next/navigation';

/**
 * Stories page now redirects to Impact page.
 * Stories are impact evidence and live under the Impact section.
 * This redirect ensures existing links and bookmarks continue to work.
 */
export default function StoriesPage() {
  redirect('/impact#stories');
}