export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      annotation_templates: {
        Row: {
          annotations: Json
          created_at: string
          created_by: string
          description: string | null
          id: string
          name: string
          project_id: string
          thumbnail_url: string | null
          updated_at: string
        }
        Insert: {
          annotations?: Json
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          name: string
          project_id: string
          thumbnail_url?: string | null
          updated_at?: string
        }
        Update: {
          annotations?: Json
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          project_id?: string
          thumbnail_url?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "annotation_templates_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "annotation_templates_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      attachments: {
        Row: {
          category: string | null
          change_order_id: string | null
          created_at: string
          file_name: string
          file_path: string
          file_size: number | null
          file_type: string | null
          id: string
          pay_application_id: string | null
          pin_id: string | null
          project_id: string
          rfi_id: string | null
          uploaded_by: string
        }
        Insert: {
          category?: string | null
          change_order_id?: string | null
          created_at?: string
          file_name: string
          file_path: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          pay_application_id?: string | null
          pin_id?: string | null
          project_id: string
          rfi_id?: string | null
          uploaded_by: string
        }
        Update: {
          category?: string | null
          change_order_id?: string | null
          created_at?: string
          file_name?: string
          file_path?: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          pay_application_id?: string | null
          pin_id?: string | null
          project_id?: string
          rfi_id?: string | null
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "attachments_change_order_id_fkey"
            columns: ["change_order_id"]
            isOneToOne: false
            referencedRelation: "change_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attachments_pay_application_id_fkey"
            columns: ["pay_application_id"]
            isOneToOne: false
            referencedRelation: "pay_applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attachments_pin_id_fkey"
            columns: ["pin_id"]
            isOneToOne: false
            referencedRelation: "plan_pins"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attachments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attachments_rfi_id_fkey"
            columns: ["rfi_id"]
            isOneToOne: false
            referencedRelation: "rfis"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attachments_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      budget_items: {
        Row: {
          created_at: string
          description: string
          id: string
          item_number: string
          materials_stored: number
          project_id: string
          retainage_percent: number
          scheduled_value: number
          sort_order: number
          updated_at: string
          work_completed_current: number
          work_completed_previous: number
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          item_number: string
          materials_stored?: number
          project_id: string
          retainage_percent?: number
          scheduled_value?: number
          sort_order?: number
          updated_at?: string
          work_completed_current?: number
          work_completed_previous?: number
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          item_number?: string
          materials_stored?: number
          project_id?: string
          retainage_percent?: number
          scheduled_value?: number
          sort_order?: number
          updated_at?: string
          work_completed_current?: number
          work_completed_previous?: number
        }
        Relationships: [
          {
            foreignKeyName: "budget_items_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      certificates_of_insurance: {
        Row: {
          carrier_name: string
          coverage_amount: number
          created_at: string
          document_name: string | null
          document_path: string | null
          effective_date: string
          expiration_date: string
          id: string
          insurance_type: Database["public"]["Enums"]["insurance_type"]
          is_additional_insured: boolean | null
          is_waiver_of_subrogation: boolean | null
          notes: string | null
          policy_number: string | null
          project_id: string
          status: Database["public"]["Enums"]["coi_status"]
          subcontractor_id: string | null
          updated_at: string
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          carrier_name: string
          coverage_amount?: number
          created_at?: string
          document_name?: string | null
          document_path?: string | null
          effective_date: string
          expiration_date: string
          id?: string
          insurance_type: Database["public"]["Enums"]["insurance_type"]
          is_additional_insured?: boolean | null
          is_waiver_of_subrogation?: boolean | null
          notes?: string | null
          policy_number?: string | null
          project_id: string
          status?: Database["public"]["Enums"]["coi_status"]
          subcontractor_id?: string | null
          updated_at?: string
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          carrier_name?: string
          coverage_amount?: number
          created_at?: string
          document_name?: string | null
          document_path?: string | null
          effective_date?: string
          expiration_date?: string
          id?: string
          insurance_type?: Database["public"]["Enums"]["insurance_type"]
          is_additional_insured?: boolean | null
          is_waiver_of_subrogation?: boolean | null
          notes?: string | null
          policy_number?: string | null
          project_id?: string
          status?: Database["public"]["Enums"]["coi_status"]
          subcontractor_id?: string | null
          updated_at?: string
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "certificates_of_insurance_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certificates_of_insurance_subcontractor_id_fkey"
            columns: ["subcontractor_id"]
            isOneToOne: false
            referencedRelation: "subcontractors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certificates_of_insurance_verified_by_fkey"
            columns: ["verified_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      certified_payroll_reports: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          certification_statement: string | null
          contractor_address: string | null
          contractor_name: string | null
          created_at: string
          id: string
          notes: string | null
          project_id: string
          project_location: string | null
          project_name: string | null
          report_number: number
          signature_data: string | null
          signed_at: string | null
          signer_name: string | null
          signer_title: string | null
          status: Database["public"]["Enums"]["payroll_status"]
          subcontractor_id: string | null
          submitted_at: string | null
          submitted_by: string | null
          updated_at: string
          week_ending: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          certification_statement?: string | null
          contractor_address?: string | null
          contractor_name?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          project_id: string
          project_location?: string | null
          project_name?: string | null
          report_number: number
          signature_data?: string | null
          signed_at?: string | null
          signer_name?: string | null
          signer_title?: string | null
          status?: Database["public"]["Enums"]["payroll_status"]
          subcontractor_id?: string | null
          submitted_at?: string | null
          submitted_by?: string | null
          updated_at?: string
          week_ending: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          certification_statement?: string | null
          contractor_address?: string | null
          contractor_name?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          project_id?: string
          project_location?: string | null
          project_name?: string | null
          report_number?: number
          signature_data?: string | null
          signed_at?: string | null
          signer_name?: string | null
          signer_title?: string | null
          status?: Database["public"]["Enums"]["payroll_status"]
          subcontractor_id?: string | null
          submitted_at?: string | null
          submitted_by?: string | null
          updated_at?: string
          week_ending?: string
        }
        Relationships: [
          {
            foreignKeyName: "certified_payroll_reports_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certified_payroll_reports_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certified_payroll_reports_subcontractor_id_fkey"
            columns: ["subcontractor_id"]
            isOneToOne: false
            referencedRelation: "subcontractors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certified_payroll_reports_submitted_by_fkey"
            columns: ["submitted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      change_orders: {
        Row: {
          amount: number
          approved_at: string | null
          approved_by: string | null
          co_number: number
          created_at: string
          created_by: string
          description: string | null
          id: string
          project_id: string
          reason: string | null
          status: Database["public"]["Enums"]["change_order_status"]
          title: string
          updated_at: string
        }
        Insert: {
          amount?: number
          approved_at?: string | null
          approved_by?: string | null
          co_number?: number
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          project_id: string
          reason?: string | null
          status?: Database["public"]["Enums"]["change_order_status"]
          title: string
          updated_at?: string
        }
        Update: {
          amount?: number
          approved_at?: string | null
          approved_by?: string | null
          co_number?: number
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          project_id?: string
          reason?: string | null
          status?: Database["public"]["Enums"]["change_order_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "change_orders_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "change_orders_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "change_orders_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_logs: {
        Row: {
          author_id: string
          created_at: string
          delays: string | null
          id: string
          log_date: string
          man_hours: number | null
          notes: string | null
          project_id: string
          safety_incidents: string | null
          temperature_high: number | null
          temperature_low: number | null
          updated_at: string
          weather: Database["public"]["Enums"]["weather_condition"] | null
          work_performed: string | null
          workers_onsite: number | null
        }
        Insert: {
          author_id: string
          created_at?: string
          delays?: string | null
          id?: string
          log_date?: string
          man_hours?: number | null
          notes?: string | null
          project_id: string
          safety_incidents?: string | null
          temperature_high?: number | null
          temperature_low?: number | null
          updated_at?: string
          weather?: Database["public"]["Enums"]["weather_condition"] | null
          work_performed?: string | null
          workers_onsite?: number | null
        }
        Update: {
          author_id?: string
          created_at?: string
          delays?: string | null
          id?: string
          log_date?: string
          man_hours?: number | null
          notes?: string | null
          project_id?: string
          safety_incidents?: string | null
          temperature_high?: number | null
          temperature_low?: number | null
          updated_at?: string
          weather?: Database["public"]["Enums"]["weather_condition"] | null
          work_performed?: string | null
          workers_onsite?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "daily_logs_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "daily_logs_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      email_templates: {
        Row: {
          available_variables: Json | null
          body_html: string
          created_at: string
          created_by: string | null
          id: string
          is_active: boolean | null
          name: string
          project_id: string
          subject: string
          template_type: string
          updated_at: string
        }
        Insert: {
          available_variables?: Json | null
          body_html: string
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          project_id: string
          subject: string
          template_type: string
          updated_at?: string
        }
        Update: {
          available_variables?: Json | null
          body_html?: string
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          project_id?: string
          subject?: string
          template_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_templates_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_templates_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      insurance_requirements: {
        Row: {
          created_at: string
          description: string | null
          id: string
          insurance_type: Database["public"]["Enums"]["insurance_type"]
          is_required: boolean
          minimum_coverage: number
          project_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          insurance_type: Database["public"]["Enums"]["insurance_type"]
          is_required?: boolean
          minimum_coverage?: number
          project_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          insurance_type?: Database["public"]["Enums"]["insurance_type"]
          is_required?: boolean
          minimum_coverage?: number
          project_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "insurance_requirements_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      lien_waivers: {
        Row: {
          amount: number
          approved_at: string | null
          approved_by: string | null
          created_at: string
          document_name: string | null
          document_path: string | null
          id: string
          is_notarized: boolean | null
          notarized_at: string | null
          notary_name: string | null
          notes: string | null
          pay_application_id: string | null
          project_id: string
          received_at: string | null
          requested_at: string | null
          requested_by: string | null
          status: Database["public"]["Enums"]["lien_waiver_status"]
          subcontractor_id: string | null
          through_date: string | null
          updated_at: string
          waiver_type: Database["public"]["Enums"]["lien_waiver_type"]
        }
        Insert: {
          amount?: number
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          document_name?: string | null
          document_path?: string | null
          id?: string
          is_notarized?: boolean | null
          notarized_at?: string | null
          notary_name?: string | null
          notes?: string | null
          pay_application_id?: string | null
          project_id: string
          received_at?: string | null
          requested_at?: string | null
          requested_by?: string | null
          status?: Database["public"]["Enums"]["lien_waiver_status"]
          subcontractor_id?: string | null
          through_date?: string | null
          updated_at?: string
          waiver_type: Database["public"]["Enums"]["lien_waiver_type"]
        }
        Update: {
          amount?: number
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          document_name?: string | null
          document_path?: string | null
          id?: string
          is_notarized?: boolean | null
          notarized_at?: string | null
          notary_name?: string | null
          notes?: string | null
          pay_application_id?: string | null
          project_id?: string
          received_at?: string | null
          requested_at?: string | null
          requested_by?: string | null
          status?: Database["public"]["Enums"]["lien_waiver_status"]
          subcontractor_id?: string | null
          through_date?: string | null
          updated_at?: string
          waiver_type?: Database["public"]["Enums"]["lien_waiver_type"]
        }
        Relationships: [
          {
            foreignKeyName: "lien_waivers_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lien_waivers_pay_application_id_fkey"
            columns: ["pay_application_id"]
            isOneToOne: false
            referencedRelation: "pay_applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lien_waivers_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lien_waivers_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lien_waivers_subcontractor_id_fkey"
            columns: ["subcontractor_id"]
            isOneToOne: false
            referencedRelation: "subcontractors"
            referencedColumns: ["id"]
          },
        ]
      }
      milestones: {
        Row: {
          color: string | null
          created_at: string
          created_by: string | null
          description: string | null
          end_date: string
          id: string
          name: string
          parent_id: string | null
          progress: number
          project_id: string
          sort_order: number
          start_date: string
          updated_at: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_date: string
          id?: string
          name: string
          parent_id?: string | null
          progress?: number
          project_id: string
          sort_order?: number
          start_date: string
          updated_at?: string
        }
        Update: {
          color?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_date?: string
          id?: string
          name?: string
          parent_id?: string | null
          progress?: number
          project_id?: string
          sort_order?: number
          start_date?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "milestones_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "milestones_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "milestones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "milestones_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      pay_application_signatures: {
        Row: {
          change_order_id: string | null
          created_at: string
          id: string
          ip_address: string | null
          pay_application_id: string | null
          project_id: string
          signature_data: string
          signature_type: string
          signed_at: string
          signer_name: string
          signer_title: string | null
          updated_at: string
        }
        Insert: {
          change_order_id?: string | null
          created_at?: string
          id?: string
          ip_address?: string | null
          pay_application_id?: string | null
          project_id: string
          signature_data: string
          signature_type: string
          signed_at?: string
          signer_name: string
          signer_title?: string | null
          updated_at?: string
        }
        Update: {
          change_order_id?: string | null
          created_at?: string
          id?: string
          ip_address?: string | null
          pay_application_id?: string | null
          project_id?: string
          signature_data?: string
          signature_type?: string
          signed_at?: string
          signer_name?: string
          signer_title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pay_application_signatures_change_order_id_fkey"
            columns: ["change_order_id"]
            isOneToOne: false
            referencedRelation: "change_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pay_application_signatures_pay_application_id_fkey"
            columns: ["pay_application_id"]
            isOneToOne: false
            referencedRelation: "pay_applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pay_application_signatures_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      pay_applications: {
        Row: {
          application_date: string | null
          application_number: number
          approved_at: string | null
          approved_by: string | null
          architect_name: string | null
          architect_project_number: string | null
          change_orders_total: number
          contract_date: string | null
          contract_to_date: number
          created_at: string
          current_payment_due: number
          id: string
          less_previous_certificates: number
          notes: string | null
          original_contract: number
          owner_name: string | null
          period_from: string
          period_to: string
          project_id: string
          retainage_amount: number
          retainage_released: number | null
          status: string
          submitted_at: string | null
          submitted_by: string | null
          total_completed: number
          total_earned_less_retainage: number
          updated_at: string
        }
        Insert: {
          application_date?: string | null
          application_number: number
          approved_at?: string | null
          approved_by?: string | null
          architect_name?: string | null
          architect_project_number?: string | null
          change_orders_total?: number
          contract_date?: string | null
          contract_to_date?: number
          created_at?: string
          current_payment_due?: number
          id?: string
          less_previous_certificates?: number
          notes?: string | null
          original_contract?: number
          owner_name?: string | null
          period_from: string
          period_to: string
          project_id: string
          retainage_amount?: number
          retainage_released?: number | null
          status?: string
          submitted_at?: string | null
          submitted_by?: string | null
          total_completed?: number
          total_earned_less_retainage?: number
          updated_at?: string
        }
        Update: {
          application_date?: string | null
          application_number?: number
          approved_at?: string | null
          approved_by?: string | null
          architect_name?: string | null
          architect_project_number?: string | null
          change_orders_total?: number
          contract_date?: string | null
          contract_to_date?: number
          created_at?: string
          current_payment_due?: number
          id?: string
          less_previous_certificates?: number
          notes?: string | null
          original_contract?: number
          owner_name?: string | null
          period_from?: string
          period_to?: string
          project_id?: string
          retainage_amount?: number
          retainage_released?: number | null
          status?: string
          submitted_at?: string | null
          submitted_by?: string | null
          total_completed?: number
          total_earned_less_retainage?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pay_applications_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pay_applications_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pay_applications_submitted_by_fkey"
            columns: ["submitted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      payroll_employees: {
        Row: {
          created_at: string
          deductions: number | null
          employee_id: string | null
          employee_name: string
          fringe_rate: number
          gross_wages: number | null
          hours_worked_day1: number | null
          hours_worked_day2: number | null
          hours_worked_day3: number | null
          hours_worked_day4: number | null
          hours_worked_day5: number | null
          hours_worked_day6: number | null
          hours_worked_day7: number | null
          id: string
          net_wages: number | null
          overtime_hours: number | null
          payroll_report_id: string
          prevailing_wage_rate: number
          project_id: string
          total_hours: number | null
          updated_at: string
          work_classification: string
        }
        Insert: {
          created_at?: string
          deductions?: number | null
          employee_id?: string | null
          employee_name: string
          fringe_rate?: number
          gross_wages?: number | null
          hours_worked_day1?: number | null
          hours_worked_day2?: number | null
          hours_worked_day3?: number | null
          hours_worked_day4?: number | null
          hours_worked_day5?: number | null
          hours_worked_day6?: number | null
          hours_worked_day7?: number | null
          id?: string
          net_wages?: number | null
          overtime_hours?: number | null
          payroll_report_id: string
          prevailing_wage_rate?: number
          project_id: string
          total_hours?: number | null
          updated_at?: string
          work_classification: string
        }
        Update: {
          created_at?: string
          deductions?: number | null
          employee_id?: string | null
          employee_name?: string
          fringe_rate?: number
          gross_wages?: number | null
          hours_worked_day1?: number | null
          hours_worked_day2?: number | null
          hours_worked_day3?: number | null
          hours_worked_day4?: number | null
          hours_worked_day5?: number | null
          hours_worked_day6?: number | null
          hours_worked_day7?: number | null
          id?: string
          net_wages?: number | null
          overtime_hours?: number | null
          payroll_report_id?: string
          prevailing_wage_rate?: number
          project_id?: string
          total_hours?: number | null
          updated_at?: string
          work_classification?: string
        }
        Relationships: [
          {
            foreignKeyName: "payroll_employees_payroll_report_id_fkey"
            columns: ["payroll_report_id"]
            isOneToOne: false
            referencedRelation: "certified_payroll_reports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_employees_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      pin_comments: {
        Row: {
          author_id: string
          content: string
          created_at: string
          id: string
          mentions: string[] | null
          parent_id: string | null
          pin_id: string
          project_id: string
          updated_at: string
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          id?: string
          mentions?: string[] | null
          parent_id?: string | null
          pin_id: string
          project_id: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          id?: string
          mentions?: string[] | null
          parent_id?: string | null
          pin_id?: string
          project_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pin_comments_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pin_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "pin_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pin_comments_pin_id_fkey"
            columns: ["pin_id"]
            isOneToOne: false
            referencedRelation: "plan_pins"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pin_comments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      plan_annotation_layers: {
        Row: {
          color: string
          created_at: string
          id: string
          is_locked: boolean
          is_visible: boolean
          name: string
          plan_id: string
          project_id: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          color?: string
          created_at?: string
          id?: string
          is_locked?: boolean
          is_visible?: boolean
          name: string
          plan_id: string
          project_id: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          color?: string
          created_at?: string
          id?: string
          is_locked?: boolean
          is_visible?: boolean
          name?: string
          plan_id?: string
          project_id?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "plan_annotation_layers_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_annotation_layers_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      plan_annotations: {
        Row: {
          annotation_type: string
          color: string
          created_at: string
          created_by: string
          end_x: number | null
          end_y: number | null
          id: string
          layer: string
          measurement_unit: string | null
          measurement_value: number | null
          path_points: Json | null
          plan_id: string
          project_id: string
          start_x: number
          start_y: number
          stroke_width: number
          text_content: string | null
          updated_at: string
        }
        Insert: {
          annotation_type: string
          color?: string
          created_at?: string
          created_by: string
          end_x?: number | null
          end_y?: number | null
          id?: string
          layer?: string
          measurement_unit?: string | null
          measurement_value?: number | null
          path_points?: Json | null
          plan_id: string
          project_id: string
          start_x: number
          start_y: number
          stroke_width?: number
          text_content?: string | null
          updated_at?: string
        }
        Update: {
          annotation_type?: string
          color?: string
          created_at?: string
          created_by?: string
          end_x?: number | null
          end_y?: number | null
          id?: string
          layer?: string
          measurement_unit?: string | null
          measurement_value?: number | null
          path_points?: Json | null
          plan_id?: string
          project_id?: string
          start_x?: number
          start_y?: number
          stroke_width?: number
          text_content?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "plan_annotations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_annotations_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_annotations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      plan_pins: {
        Row: {
          assigned_to: string | null
          created_at: string
          created_by: string
          description: string | null
          id: string
          pin_type: string | null
          plan_id: string
          project_id: string
          rfi_id: string | null
          status: string | null
          title: string
          updated_at: string
          x_position: number
          y_position: number
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          pin_type?: string | null
          plan_id: string
          project_id: string
          rfi_id?: string | null
          status?: string | null
          title: string
          updated_at?: string
          x_position: number
          y_position: number
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          pin_type?: string | null
          plan_id?: string
          project_id?: string
          rfi_id?: string | null
          status?: string | null
          title?: string
          updated_at?: string
          x_position?: number
          y_position?: number
        }
        Relationships: [
          {
            foreignKeyName: "plan_pins_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_pins_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_pins_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_pins_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_pins_rfi_id_fkey"
            columns: ["rfi_id"]
            isOneToOne: false
            referencedRelation: "rfis"
            referencedColumns: ["id"]
          },
        ]
      }
      plans: {
        Row: {
          created_at: string
          description: string | null
          discipline: string | null
          file_name: string
          file_path: string
          file_size: number | null
          id: string
          is_current: boolean | null
          name: string
          project_id: string
          scale_calibration: Json | null
          sheet_number: string | null
          updated_at: string
          uploaded_by: string
          version: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          discipline?: string | null
          file_name: string
          file_path: string
          file_size?: number | null
          id?: string
          is_current?: boolean | null
          name: string
          project_id: string
          scale_calibration?: Json | null
          sheet_number?: string | null
          updated_at?: string
          uploaded_by: string
          version?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          discipline?: string | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          id?: string
          is_current?: boolean | null
          name?: string
          project_id?: string
          scale_calibration?: Json | null
          sheet_number?: string | null
          updated_at?: string
          uploaded_by?: string
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "plans_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plans_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company_logo_url: string | null
          company_name: string | null
          created_at: string
          email: string
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          company_logo_url?: string | null
          company_name?: string | null
          created_at?: string
          email: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          company_logo_url?: string | null
          company_name?: string | null
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      project_members: {
        Row: {
          created_at: string
          id: string
          invited_by: string | null
          project_id: string
          role: Database["public"]["Enums"]["project_role"]
          subcontractor_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          invited_by?: string | null
          project_id: string
          role: Database["public"]["Enums"]["project_role"]
          subcontractor_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          invited_by?: string | null
          project_id?: string
          role?: Database["public"]["Enums"]["project_role"]
          subcontractor_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_members_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_members_subcontractor_id_fkey"
            columns: ["subcontractor_id"]
            isOneToOne: false
            referencedRelation: "subcontractors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          address: string | null
          budget_spent: number
          budget_total: number
          created_at: string
          created_by: string | null
          description: string | null
          end_date: string | null
          id: string
          location: string | null
          name: string
          percent_complete: number
          start_date: string | null
          status: Database["public"]["Enums"]["project_status"]
          updated_at: string
        }
        Insert: {
          address?: string | null
          budget_spent?: number
          budget_total?: number
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          location?: string | null
          name: string
          percent_complete?: number
          start_date?: string | null
          status?: Database["public"]["Enums"]["project_status"]
          updated_at?: string
        }
        Update: {
          address?: string | null
          budget_spent?: number
          budget_total?: number
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          location?: string | null
          name?: string
          percent_complete?: number
          start_date?: string | null
          status?: Database["public"]["Enums"]["project_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      resource_allocations: {
        Row: {
          allocated_by: string | null
          created_at: string
          end_date: string | null
          id: string
          notes: string | null
          project_id: string
          quantity: number
          resource_id: string
          start_date: string
          updated_at: string
        }
        Insert: {
          allocated_by?: string | null
          created_at?: string
          end_date?: string | null
          id?: string
          notes?: string | null
          project_id: string
          quantity?: number
          resource_id: string
          start_date: string
          updated_at?: string
        }
        Update: {
          allocated_by?: string | null
          created_at?: string
          end_date?: string | null
          id?: string
          notes?: string | null
          project_id?: string
          quantity?: number
          resource_id?: string
          start_date?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "resource_allocations_allocated_by_fkey"
            columns: ["allocated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resource_allocations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resource_allocations_resource_id_fkey"
            columns: ["resource_id"]
            isOneToOne: false
            referencedRelation: "resources"
            referencedColumns: ["id"]
          },
        ]
      }
      resource_usage_logs: {
        Row: {
          allocation_id: string
          cost: number | null
          created_at: string
          hours_used: number | null
          id: string
          log_date: string
          logged_by: string | null
          notes: string | null
          project_id: string
          quantity_used: number | null
          updated_at: string
        }
        Insert: {
          allocation_id: string
          cost?: number | null
          created_at?: string
          hours_used?: number | null
          id?: string
          log_date?: string
          logged_by?: string | null
          notes?: string | null
          project_id: string
          quantity_used?: number | null
          updated_at?: string
        }
        Update: {
          allocation_id?: string
          cost?: number | null
          created_at?: string
          hours_used?: number | null
          id?: string
          log_date?: string
          logged_by?: string | null
          notes?: string | null
          project_id?: string
          quantity_used?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "resource_usage_logs_allocation_id_fkey"
            columns: ["allocation_id"]
            isOneToOne: false
            referencedRelation: "resource_allocations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resource_usage_logs_logged_by_fkey"
            columns: ["logged_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resource_usage_logs_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      resources: {
        Row: {
          created_at: string
          created_by: string | null
          daily_rate: number | null
          description: string | null
          hourly_rate: number | null
          id: string
          name: string
          resource_type: Database["public"]["Enums"]["resource_type"]
          status: Database["public"]["Enums"]["resource_status"]
          unit: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          daily_rate?: number | null
          description?: string | null
          hourly_rate?: number | null
          id?: string
          name: string
          resource_type: Database["public"]["Enums"]["resource_type"]
          status?: Database["public"]["Enums"]["resource_status"]
          unit?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          daily_rate?: number | null
          description?: string | null
          hourly_rate?: number | null
          id?: string
          name?: string
          resource_type?: Database["public"]["Enums"]["resource_type"]
          status?: Database["public"]["Enums"]["resource_status"]
          unit?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "resources_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      retainage_releases: {
        Row: {
          amount: number
          created_at: string
          description: string | null
          id: string
          pay_application_id: string | null
          project_id: string
          release_date: string
          released_by: string | null
          updated_at: string
        }
        Insert: {
          amount?: number
          created_at?: string
          description?: string | null
          id?: string
          pay_application_id?: string | null
          project_id: string
          release_date?: string
          released_by?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string | null
          id?: string
          pay_application_id?: string | null
          project_id?: string
          release_date?: string
          released_by?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "retainage_releases_pay_application_id_fkey"
            columns: ["pay_application_id"]
            isOneToOne: false
            referencedRelation: "pay_applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "retainage_releases_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "retainage_releases_released_by_fkey"
            columns: ["released_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      rfis: {
        Row: {
          assigned_to: string | null
          cost_impact: number | null
          created_at: string
          created_by: string
          description: string | null
          due_date: string | null
          id: string
          project_id: string
          responded_at: string | null
          responded_by: string | null
          response: string | null
          rfi_number: number
          schedule_impact: number | null
          status: Database["public"]["Enums"]["rfi_status"]
          title: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          cost_impact?: number | null
          created_at?: string
          created_by: string
          description?: string | null
          due_date?: string | null
          id?: string
          project_id: string
          responded_at?: string | null
          responded_by?: string | null
          response?: string | null
          rfi_number?: number
          schedule_impact?: number | null
          status?: Database["public"]["Enums"]["rfi_status"]
          title: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          cost_impact?: number | null
          created_at?: string
          created_by?: string
          description?: string | null
          due_date?: string | null
          id?: string
          project_id?: string
          responded_at?: string | null
          responded_by?: string | null
          response?: string | null
          rfi_number?: number
          schedule_impact?: number | null
          status?: Database["public"]["Enums"]["rfi_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rfis_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rfis_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rfis_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rfis_responded_by_fkey"
            columns: ["responded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      safety_incidents: {
        Row: {
          closed_at: string | null
          closed_by: string | null
          corrective_actions: string | null
          created_at: string
          days_away_from_work: number | null
          days_restricted_duty: number | null
          description: string | null
          id: string
          immediate_actions: string | null
          incident_date: string
          incident_number: number
          incident_time: string | null
          injured_party_company: string | null
          injured_party_name: string | null
          investigated_by: string | null
          is_osha_recordable: boolean | null
          location: string | null
          osha_case_number: string | null
          preventive_measures: string | null
          project_id: string
          reported_by: string
          root_cause: string | null
          severity: Database["public"]["Enums"]["incident_severity"]
          status: Database["public"]["Enums"]["incident_status"]
          title: string
          updated_at: string
          witness_names: string | null
        }
        Insert: {
          closed_at?: string | null
          closed_by?: string | null
          corrective_actions?: string | null
          created_at?: string
          days_away_from_work?: number | null
          days_restricted_duty?: number | null
          description?: string | null
          id?: string
          immediate_actions?: string | null
          incident_date?: string
          incident_number?: number
          incident_time?: string | null
          injured_party_company?: string | null
          injured_party_name?: string | null
          investigated_by?: string | null
          is_osha_recordable?: boolean | null
          location?: string | null
          osha_case_number?: string | null
          preventive_measures?: string | null
          project_id: string
          reported_by: string
          root_cause?: string | null
          severity: Database["public"]["Enums"]["incident_severity"]
          status?: Database["public"]["Enums"]["incident_status"]
          title: string
          updated_at?: string
          witness_names?: string | null
        }
        Update: {
          closed_at?: string | null
          closed_by?: string | null
          corrective_actions?: string | null
          created_at?: string
          days_away_from_work?: number | null
          days_restricted_duty?: number | null
          description?: string | null
          id?: string
          immediate_actions?: string | null
          incident_date?: string
          incident_number?: number
          incident_time?: string | null
          injured_party_company?: string | null
          injured_party_name?: string | null
          investigated_by?: string | null
          is_osha_recordable?: boolean | null
          location?: string | null
          osha_case_number?: string | null
          preventive_measures?: string | null
          project_id?: string
          reported_by?: string
          root_cause?: string | null
          severity?: Database["public"]["Enums"]["incident_severity"]
          status?: Database["public"]["Enums"]["incident_status"]
          title?: string
          updated_at?: string
          witness_names?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "safety_incidents_closed_by_fkey"
            columns: ["closed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "safety_incidents_investigated_by_fkey"
            columns: ["investigated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "safety_incidents_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "safety_incidents_reported_by_fkey"
            columns: ["reported_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      safety_observations: {
        Row: {
          attendee_count: number | null
          corrected_at: string | null
          corrected_by: string | null
          correction_notes: string | null
          created_at: string
          description: string | null
          id: string
          is_corrected: boolean | null
          location: string | null
          observation_date: string
          observation_type: Database["public"]["Enums"]["safety_observation_type"]
          photo_path: string | null
          project_id: string
          reported_by: string
          title: string
          topic: string | null
          updated_at: string
        }
        Insert: {
          attendee_count?: number | null
          corrected_at?: string | null
          corrected_by?: string | null
          correction_notes?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_corrected?: boolean | null
          location?: string | null
          observation_date?: string
          observation_type: Database["public"]["Enums"]["safety_observation_type"]
          photo_path?: string | null
          project_id: string
          reported_by: string
          title: string
          topic?: string | null
          updated_at?: string
        }
        Update: {
          attendee_count?: number | null
          corrected_at?: string | null
          corrected_by?: string | null
          correction_notes?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_corrected?: boolean | null
          location?: string | null
          observation_date?: string
          observation_type?: Database["public"]["Enums"]["safety_observation_type"]
          photo_path?: string | null
          project_id?: string
          reported_by?: string
          title?: string
          topic?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "safety_observations_corrected_by_fkey"
            columns: ["corrected_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "safety_observations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "safety_observations_reported_by_fkey"
            columns: ["reported_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      signature_audit_logs: {
        Row: {
          action_type: string
          actor_email: string | null
          actor_id: string | null
          actor_name: string | null
          change_order_id: string | null
          created_at: string
          description: string | null
          id: string
          ip_address: string | null
          metadata: Json | null
          pay_application_id: string | null
          project_id: string
          signature_request_id: string | null
        }
        Insert: {
          action_type: string
          actor_email?: string | null
          actor_id?: string | null
          actor_name?: string | null
          change_order_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          pay_application_id?: string | null
          project_id: string
          signature_request_id?: string | null
        }
        Update: {
          action_type?: string
          actor_email?: string | null
          actor_id?: string | null
          actor_name?: string | null
          change_order_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          pay_application_id?: string | null
          project_id?: string
          signature_request_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "signature_audit_logs_actor_id_fkey"
            columns: ["actor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "signature_audit_logs_change_order_id_fkey"
            columns: ["change_order_id"]
            isOneToOne: false
            referencedRelation: "change_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "signature_audit_logs_pay_application_id_fkey"
            columns: ["pay_application_id"]
            isOneToOne: false
            referencedRelation: "pay_applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "signature_audit_logs_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "signature_audit_logs_signature_request_id_fkey"
            columns: ["signature_request_id"]
            isOneToOne: false
            referencedRelation: "signature_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      signature_contacts: {
        Row: {
          company: string | null
          created_at: string
          created_by: string | null
          default_role: string | null
          email: string
          id: string
          name: string
          project_id: string
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          created_by?: string | null
          default_role?: string | null
          email: string
          id?: string
          name: string
          project_id: string
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          created_by?: string | null
          default_role?: string | null
          email?: string
          id?: string
          name?: string
          project_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "signature_contacts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "signature_contacts_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      signature_requests: {
        Row: {
          change_order_id: string | null
          created_at: string
          expires_at: string
          id: string
          pay_application_id: string | null
          project_id: string
          recipient_email: string
          recipient_name: string | null
          requested_by: string
          signature_type: string
          signed_at: string | null
          status: string
          token: string
          updated_at: string
        }
        Insert: {
          change_order_id?: string | null
          created_at?: string
          expires_at?: string
          id?: string
          pay_application_id?: string | null
          project_id: string
          recipient_email: string
          recipient_name?: string | null
          requested_by: string
          signature_type: string
          signed_at?: string | null
          status?: string
          token?: string
          updated_at?: string
        }
        Update: {
          change_order_id?: string | null
          created_at?: string
          expires_at?: string
          id?: string
          pay_application_id?: string | null
          project_id?: string
          recipient_email?: string
          recipient_name?: string | null
          requested_by?: string
          signature_type?: string
          signed_at?: string | null
          status?: string
          token?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "signature_requests_change_order_id_fkey"
            columns: ["change_order_id"]
            isOneToOne: false
            referencedRelation: "change_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "signature_requests_pay_application_id_fkey"
            columns: ["pay_application_id"]
            isOneToOne: false
            referencedRelation: "pay_applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "signature_requests_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "signature_requests_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subcontractors: {
        Row: {
          company_name: string
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          created_at: string
          id: string
          insurance_expiry: string | null
          license_number: string | null
          trade: string
          updated_at: string
        }
        Insert: {
          company_name: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string
          id?: string
          insurance_expiry?: string | null
          license_number?: string | null
          trade: string
          updated_at?: string
        }
        Update: {
          company_name?: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string
          id?: string
          insurance_expiry?: string | null
          license_number?: string | null
          trade?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_profile_id: { Args: never; Returns: string }
      get_shared_project_user_ids: { Args: never; Returns: string[] }
      has_project_role: {
        Args: {
          _project_id: string
          _role: Database["public"]["Enums"]["project_role"]
        }
        Returns: boolean
      }
      is_project_admin: { Args: { _project_id: string }; Returns: boolean }
      is_project_creator: { Args: { _project_id: string }; Returns: boolean }
      is_project_member: { Args: { _project_id: string }; Returns: boolean }
    }
    Enums: {
      change_order_status: "pending" | "approved" | "rejected" | "void"
      coi_status:
        | "pending"
        | "active"
        | "expiring_soon"
        | "expired"
        | "non_compliant"
      incident_severity:
        | "near_miss"
        | "first_aid"
        | "medical_treatment"
        | "lost_time"
        | "fatality"
      incident_status:
        | "reported"
        | "investigating"
        | "corrective_action"
        | "closed"
      insurance_type:
        | "general_liability"
        | "workers_compensation"
        | "auto_liability"
        | "umbrella"
        | "professional_liability"
        | "builders_risk"
        | "pollution"
        | "other"
      lien_waiver_status:
        | "draft"
        | "requested"
        | "received"
        | "approved"
        | "rejected"
      lien_waiver_type:
        | "conditional_partial"
        | "unconditional_partial"
        | "conditional_final"
        | "unconditional_final"
      payroll_status: "draft" | "submitted" | "approved" | "rejected"
      project_role:
        | "owner"
        | "gc"
        | "superintendent"
        | "subcontractor"
        | "architect"
        | "engineer"
      project_status: "planning" | "in-progress" | "on-hold" | "completed"
      resource_status: "available" | "assigned" | "unavailable" | "maintenance"
      resource_type: "labor" | "equipment" | "material"
      rfi_status: "draft" | "open" | "answered" | "closed"
      safety_observation_type:
        | "hazard"
        | "unsafe_act"
        | "unsafe_condition"
        | "positive"
        | "toolbox_talk"
      weather_condition:
        | "sunny"
        | "cloudy"
        | "rainy"
        | "stormy"
        | "snowy"
        | "windy"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      change_order_status: ["pending", "approved", "rejected", "void"],
      coi_status: [
        "pending",
        "active",
        "expiring_soon",
        "expired",
        "non_compliant",
      ],
      incident_severity: [
        "near_miss",
        "first_aid",
        "medical_treatment",
        "lost_time",
        "fatality",
      ],
      incident_status: [
        "reported",
        "investigating",
        "corrective_action",
        "closed",
      ],
      insurance_type: [
        "general_liability",
        "workers_compensation",
        "auto_liability",
        "umbrella",
        "professional_liability",
        "builders_risk",
        "pollution",
        "other",
      ],
      lien_waiver_status: [
        "draft",
        "requested",
        "received",
        "approved",
        "rejected",
      ],
      lien_waiver_type: [
        "conditional_partial",
        "unconditional_partial",
        "conditional_final",
        "unconditional_final",
      ],
      payroll_status: ["draft", "submitted", "approved", "rejected"],
      project_role: [
        "owner",
        "gc",
        "superintendent",
        "subcontractor",
        "architect",
        "engineer",
      ],
      project_status: ["planning", "in-progress", "on-hold", "completed"],
      resource_status: ["available", "assigned", "unavailable", "maintenance"],
      resource_type: ["labor", "equipment", "material"],
      rfi_status: ["draft", "open", "answered", "closed"],
      safety_observation_type: [
        "hazard",
        "unsafe_act",
        "unsafe_condition",
        "positive",
        "toolbox_talk",
      ],
      weather_condition: [
        "sunny",
        "cloudy",
        "rainy",
        "stormy",
        "snowy",
        "windy",
      ],
    },
  },
} as const
