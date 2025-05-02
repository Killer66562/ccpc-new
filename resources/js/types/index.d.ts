export interface PageProps {
    [key: string]: unknown
}

export interface Base {
    id: number, 
    created_at: Date,
    updated_at: Date
}

export interface User extends Base {
    name: string, 
    email: string, 
    avatar?: string, 
    email_verified_at: string | null
}

export interface Auth {
    user: User | null
}

export interface SharedData extends PageProps {
    appName: string, 
    auth: Auth
}

export interface TestPageProps extends SharedData {
    message: string
}

export interface Announcement extends Base {
    content: string
}

export interface Registration extends Base {
    name: string, 
    sid: string, 
    university: string, 
    department: string, 
    tel: string, 
    email: string, 
    account: string, 
    is_paid: boolean, 
    user_id: number
}

export interface CompetitionResult extends Base {
    rank: string, 
    person: Registration
}

export interface RegistrationsPageProps extends SharedData {
    registrations: Registration[]
}