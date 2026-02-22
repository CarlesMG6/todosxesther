import {redirect} from 'next/navigation';

export default async function CatchAllPage({params}) {
  const {locale} = await params;
  redirect(`/${locale}`);
}