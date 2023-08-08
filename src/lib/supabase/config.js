import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cqgzbsfkbvwjlulejolc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxZ3pic2ZrYnZ3amx1bGVqb2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzMjA3MzgsImV4cCI6MjAwNjg5NjczOH0.8YKydys_6OVo6OzX0tUiPQugYCect3zcexmbQL6e074";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;