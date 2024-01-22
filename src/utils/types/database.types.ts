export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      booking: {
        Row: {
          booking_id: number
          created_at: string
          customer_id: string | null
          date_time: string
          location_id: number | null
          service_id: number
          staff_id: number | null
        }
        Insert: {
          booking_id?: number
          created_at?: string
          customer_id?: string | null
          date_time: string
          location_id?: number | null
          service_id: number
          staff_id?: number | null
        }
        Update: {
          booking_id?: number
          created_at?: string
          customer_id?: string | null
          date_time?: string
          location_id?: number | null
          service_id?: number
          staff_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "booking_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "location"
            referencedColumns: ["location_id"]
          },
          {
            foreignKeyName: "booking_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "service"
            referencedColumns: ["service_id"]
          },
          {
            foreignKeyName: "booking_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["staff_id"]
          }
        ]
      }
      company: {
        Row: {
          company_id: number
          contact_number: string | null
          location: number[] | null
          name: string | null
          staff: number[] | null
          website_url: string | null
        }
        Insert: {
          company_id?: number
          contact_number?: string | null
          location?: number[] | null
          name?: string | null
          staff?: number[] | null
          website_url?: string | null
        }
        Update: {
          company_id?: number
          contact_number?: string | null
          location?: number[] | null
          name?: string | null
          staff?: number[] | null
          website_url?: string | null
        }
        Relationships: []
      }
      location: {
        Row: {
          address: string
          company: number | null
          location_id: number
        }
        Insert: {
          address?: string
          company?: number | null
          location_id?: number
        }
        Update: {
          address?: string
          company?: number | null
          location_id?: number
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
          created_at: string
          first_name: string | null
          last_name: string | null
          middle_name: string | null
          phone_number: string | null
          photo: Json | null
          profile_id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          first_name?: string | null
          last_name?: string | null
          middle_name?: string | null
          phone_number?: string | null
          photo?: Json | null
          profile_id?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          first_name?: string | null
          last_name?: string | null
          middle_name?: string | null
          phone_number?: string | null
          photo?: Json | null
          profile_id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      service: {
        Row: {
          availability_id: number[] | null
          company_id: number | null
          cost: number
          description: string | null
          duration: number | null
          image: string | null
          location_id: number | null
          name: string | null
          service_id: number
          staff_id: number | null
        }
        Insert: {
          availability_id?: number[] | null
          company_id?: number | null
          cost?: number
          description?: string | null
          duration?: number | null
          image?: string | null
          location_id?: number | null
          name?: string | null
          service_id?: number
          staff_id?: number | null
        }
        Update: {
          availability_id?: number[] | null
          company_id?: number | null
          cost?: number
          description?: string | null
          duration?: number | null
          image?: string | null
          location_id?: number | null
          name?: string | null
          service_id?: number
          staff_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "service_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "service_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "location"
            referencedColumns: ["location_id"]
          },
          {
            foreignKeyName: "service_staff_id_fkey"
            columns: ["staff_id"]
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
          service_availability_id: number
          service_id: number | null
          start_time: string
        }
        Insert: {
          day_of_week: Database["public"]["Enums"]["DAYS_OF_THE_WEEK"]
          end_time: string
          service_availability_id?: number
          service_id?: number | null
          start_time: string
        }
        Update: {
          day_of_week?: Database["public"]["Enums"]["DAYS_OF_THE_WEEK"]
          end_time?: string
          service_availability_id?: number
          service_id?: number | null
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_availability_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "service"
            referencedColumns: ["service_id"]
          }
        ]
      }
      staff: {
        Row: {
          availability: number[]
          company: number[] | null
          email: string | null
          name: string | null
          phone: string | null
          staff_id: number
          user_id: string | null
        }
        Insert: {
          availability: number[]
          company?: number[] | null
          email?: string | null
          name?: string | null
          phone?: string | null
          staff_id?: number
          user_id?: string | null
        }
        Update: {
          availability?: number[]
          company?: number[] | null
          email?: string | null
          name?: string | null
          phone?: string | null
          staff_id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_phone_fkey"
            columns: ["phone"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["phone"]
          },
          {
            foreignKeyName: "staff_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "identities"
            referencedColumns: ["id"]
          }
        ]
      }
      staff_availability: {
        Row: {
          day_of_week: Database["public"]["Enums"]["DAYS_OF_THE_WEEK"]
          end_time: string
          staff_availability_id: number
          staff_id: number | null
          start_time: string
        }
        Insert: {
          day_of_week: Database["public"]["Enums"]["DAYS_OF_THE_WEEK"]
          end_time: string
          staff_availability_id?: number
          staff_id?: number | null
          start_time: string
        }
        Update: {
          day_of_week?: Database["public"]["Enums"]["DAYS_OF_THE_WEEK"]
          end_time?: string
          staff_availability_id?: number
          staff_id?: number | null
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_availability_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff"
            referencedColumns: ["staff_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
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
