'use server'
 
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
 
 function Page() {
  try {
    // Call database
  } catch (error) {
    // Handle errors
  }
 
  revalidatePath('/home') // Update cached posts
  redirect(`/home`) // Navigate to the new post page
}
export default Page;
