export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      booking: {
        Row: {
          booking_id: string
          company: string | null
          created_at: string
          customer: string | null
          date_time: string
          location: string | null
          service: string | null
          staff: string | null
          status: Database["public"]["Enums"]["BOOKING_STATUS"] | null
        }
        Insert: {
          booking_id?: string
          company?: string | null
          created_at?: string
          customer?: string | null
          date_time: string
          location?: string | null
          service?: string | null
          staff?: string | null
          status?: Database["public"]["Enums"]["BOOKING_STATUS"] | null
        }
        Update: {
          booking_id?: string
          company?: string | null
          created_at?: string
          customer?: string | null
          date_time?: string
          location?: string | null
          service?: string | null
          staff?: string | null
          status?: Database["public"]["Enums"]["BOOKING_STATUS"] | null
        }
        Relationships: [
          {
            foreignKeyName: "booking_company_fkey"
            columns: ["company"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "booking_customer_fkey"
            columns: ["customer"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_location_fkey"
            columns: ["location"]
            isOneToOne: false
            referencedRelation: "location"
            referencedColumns: ["location_id"]
          },
          {
            foreignKeyName: "booking_service_fkey"
            columns: ["service"]
            isOneToOne: false
            referencedRelation: "service"
            referencedColumns: ["service_id"]
          },
          {
            foreignKeyName: "booking_staff_fkey"
            columns: ["staff"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["staff_id"]
          }
        ]
      }
      company: {
        Row: {
          company_id: string
          contact_number: string | null
          name: string | null
          website_url: string | null
        }
        Insert: {
          company_id?: string
          contact_number?: string | null
          name?: string | null
          website_url?: string | null
        }
        Update: {
          company_id?: string
          contact_number?: string | null
          name?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      location: {
        Row: {
          address: string | null
          city: string | null
          company: string | null
          country: string | null
          location_id: string
          name: string | null
          post_code: string | null
          state: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          company?: string | null
          country?: string | null
          location_id?: string
          name?: string | null
          post_code?: string | null
          state?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          company?: string | null
          country?: string | null
          location_id?: string
          name?: string | null
          post_code?: string | null
          state?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "location_company_fkey"
            columns: ["company"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["company_id"]
          }
        ]
      }
      profile: {
        Row: {
          company: string | null
          created_at: string
          date_of_birth: string | null
          first_name: string | null
          gender: string | null
          last_name: string | null
          middle_name: string | null
          phone_number: string | null
          profile_id: string
          updated_at: string
          user: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          date_of_birth?: string | null
          first_name?: string | null
          gender?: string | null
          last_name?: string | null
          middle_name?: string | null
          phone_number?: string | null
          profile_id?: string
          updated_at?: string
          user?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          date_of_birth?: string | null
          first_name?: string | null
          gender?: string | null
          last_name?: string | null
          middle_name?: string | null
          phone_number?: string | null
          profile_id?: string
          updated_at?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_company_fkey"
            columns: ["company"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "profile_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      service: {
        Row: {
          availability: string[] | null
          company: string | null
          cost: number | null
          description: string | null
          location: string | null
          name: string | null
          service_id: string
          staff: string | null
          time: number | null
        }
        Insert: {
          availability?: string[] | null
          company?: string | null
          cost?: number | null
          description?: string | null
          location?: string | null
          name?: string | null
          service_id?: string
          staff?: string | null
          time?: number | null
        }
        Update: {
          availability?: string[] | null
          company?: string | null
          cost?: number | null
          description?: string | null
          location?: string | null
          name?: string | null
          service_id?: string
          staff?: string | null
          time?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "service_company_fkey"
            columns: ["company"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "service_location_fkey"
            columns: ["location"]
            isOneToOne: false
            referencedRelation: "location"
            referencedColumns: ["location_id"]
          },
          {
            foreignKeyName: "service_staff_fkey"
            columns: ["staff"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["staff_id"]
          }
        ]
      }
      service_availability: {
        Row: {
          day_of_week: Database["public"]["Enums"]["DAYS_OF_THE_WEEK"]
          end_time: string
          service_availability_id: string
          start_time: string
        }
        Insert: {
          day_of_week: Database["public"]["Enums"]["DAYS_OF_THE_WEEK"]
          end_time: string
          service_availability_id?: string
          start_time: string
        }
        Update: {
          day_of_week?: Database["public"]["Enums"]["DAYS_OF_THE_WEEK"]
          end_time?: string
          service_availability_id?: string
          start_time?: string
        }
        Relationships: []
      }
      staff: {
        Row: {
          availability: string[] | null
          company: string | null
          staff_id: string
          user: string | null
        }
        Insert: {
          availability?: string[] | null
          company?: string | null
          staff_id?: string
          user?: string | null
        }
        Update: {
          availability?: string[] | null
          company?: string | null
          staff_id?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_company_fkey"
            columns: ["company"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "staff_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      staff_availability: {
        Row: {
          day_of_week: Database["public"]["Enums"]["DAYS_OF_THE_WEEK"]
          end_time: string
          staff_availability_id: string
          start_time: string
        }
        Insert: {
          day_of_week: Database["public"]["Enums"]["DAYS_OF_THE_WEEK"]
          end_time: string
          staff_availability_id?: string
          start_time: string
        }
        Update: {
          day_of_week?: Database["public"]["Enums"]["DAYS_OF_THE_WEEK"]
          end_time?: string
          staff_availability_id?: string
          start_time?: string
        }
        Relationships: []
      }
      subscription_list: {
        Row: {
          created_at: string
          email: string | null
          id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      BOOKING_STATUS:
        | "Draft"
        | "Request"
        | "Pending"
        | "Confirmed"
        | "Deposit Paid"
        | "Paid"
        | "Cancelled"
        | "Expired"
        | "Waiting"
      DAYS_OF_THE_WEEK:
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
        | "Sunday"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
