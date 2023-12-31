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
      company: {
        Row: {
          address: string | null
          CNPJ: string
          created_at: string
          created_by: string
          description: string | null
          email: string | null
          id: number
          phone: number | null
          slug: string
        }
        Insert: {
          address?: string | null
          CNPJ: string
          created_at?: string
          created_by: string
          description?: string | null
          email?: string | null
          id?: number
          phone?: number | null
          slug: string
        }
        Update: {
          address?: string | null
          CNPJ?: string
          created_at?: string
          created_by?: string
          description?: string | null
          email?: string | null
          id?: number
          phone?: number | null
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      customer: {
        Row: {
          company_id: number
          created_at: string | null
          email: string | null
          id: number
          name: string
          phone: number
        }
        Insert: {
          company_id?: number
          created_at?: string | null
          email?: string | null
          id?: number
          name: string
          phone: number
        }
        Update: {
          company_id?: number
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string
          phone?: number
        }
        Relationships: [
          {
            foreignKeyName: "customer_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          }
        ]
      }
      expense: {
        Row: {
          " product_id": number | null
          amount: number
          company_id: number
          created_at: string | null
          customer_id: number | null
          description: string | null
          id: number
          quantity: number
          service_id: number | null
        }
        Insert: {
          " product_id"?: number | null
          amount: number
          company_id?: number
          created_at?: string | null
          customer_id?: number | null
          description?: string | null
          id?: number
          quantity: number
          service_id?: number | null
        }
        Update: {
          " product_id"?: number | null
          amount?: number
          company_id?: number
          created_at?: string | null
          customer_id?: number | null
          description?: string | null
          id?: number
          quantity?: number
          service_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "expense_ product_id_fkey"
            columns: [" product_id"]
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expense_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expense_customer_id_fkey"
            columns: ["customer_id"]
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expense_service_id_fkey"
            columns: ["service_id"]
            referencedRelation: "service"
            referencedColumns: ["id"]
          }
        ]
      }
      product: {
        Row: {
          company_id: number
          cost: number | null
          created_at: string | null
          description: string | null
          id: number
          name: string | null
          price: number | null
          unit: string | null
        }
        Insert: {
          company_id?: number
          cost?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          price?: number | null
          unit?: string | null
        }
        Update: {
          company_id?: number
          cost?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          price?: number | null
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          }
        ]
      }
      sale: {
        Row: {
          " product_id": number | null
          amount: number
          company_id: number
          created_at: string | null
          customer_id: number | null
          description: string | null
          id: number
          quantity: number
          service_id: number | null
        }
        Insert: {
          " product_id"?: number | null
          amount: number
          company_id?: number
          created_at?: string | null
          customer_id?: number | null
          description?: string | null
          id?: number
          quantity: number
          service_id?: number | null
        }
        Update: {
          " product_id"?: number | null
          amount?: number
          company_id?: number
          created_at?: string | null
          customer_id?: number | null
          description?: string | null
          id?: number
          quantity?: number
          service_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sale_ product_id_fkey"
            columns: [" product_id"]
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sale_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sale_customer_id_fkey"
            columns: ["customer_id"]
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sale_service_id_fkey"
            columns: ["service_id"]
            referencedRelation: "service"
            referencedColumns: ["id"]
          }
        ]
      }
      service: {
        Row: {
          company_id: number
          cost: number | null
          created_at: string | null
          description: string | null
          id: number
          name: string
          price: number
          unit: string
        }
        Insert: {
          company_id?: number
          cost?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
          price: number
          unit: string
        }
        Update: {
          company_id?: number
          cost?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
          price?: number
          unit?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          }
        ]
      }
      supplier: {
        Row: {
          company_id: number | null
          created_at: string | null
          email: string | null
          id: number
          name: string
          phone: number
        }
        Insert: {
          company_id?: number | null
          created_at?: string | null
          email?: string | null
          id?: number
          name: string
          phone: number
        }
        Update: {
          company_id?: number | null
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string
          phone?: number
        }
        Relationships: [
          {
            foreignKeyName: "supplier_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          }
        ]
      }
      transaction: {
        Row: {
          amount: number
          category: string
          company_id: number | null
          created_at: string | null
          description: string | null
          expenses_id: number | null
          id: number
          sales_id: number | null
          type: Database["public"]["Enums"]["transaction_type"]
        }
        Insert: {
          amount: number
          category: string
          company_id?: number | null
          created_at?: string | null
          description?: string | null
          expenses_id?: number | null
          id?: number
          sales_id?: number | null
          type: Database["public"]["Enums"]["transaction_type"]
        }
        Update: {
          amount?: number
          category?: string
          company_id?: number | null
          created_at?: string | null
          description?: string | null
          expenses_id?: number | null
          id?: number
          sales_id?: number | null
          type?: Database["public"]["Enums"]["transaction_type"]
        }
        Relationships: [
          {
            foreignKeyName: "transaction_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_expenses_id_fkey"
            columns: ["expenses_id"]
            referencedRelation: "expense"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_sales_id_fkey"
            columns: ["sales_id"]
            referencedRelation: "sale"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string | null
          id: string
          username: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          username?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
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
      app_permission: "transactions.delete" | "sales.delete" | "expenses.delete"
      app_role: "owner" | "manager"
      transaction_type: "income" | "outcome"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
