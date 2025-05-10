
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://epcxrxwejajcnvzlugjx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwY3hyeHdlamFqY252emx1Z2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MzQyOTgsImV4cCI6MjA2MjMxMDI5OH0.CAZTUNy-R5Nx71xeV8GOZl10YSNgeySOAQaFH2fTPbg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
