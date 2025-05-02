import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project URL and API key
const supabaseUrl = 'https://rpeffhjbyxrvqznpahdz.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwZWZmaGpieXhydnF6bnBhaGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwNDM3MjMsImV4cCI6MjA2MTYxOTcyM30.xcpMJI5k6ZLLiIAkvtJEQuCxRsQgjGdSMlMV66nfy2Q'; // Replace with your Supabase anon/public key

// Create a Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
