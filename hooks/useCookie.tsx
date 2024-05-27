import { cookies } from "next/headers";
type props = {
  name: string;
};

export async function getCookie({ name }: props) {
  const cookieStore = cookies();
  const result = cookieStore.get(name);
  return result?.value;
}
