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
    email_verified_at: string | null, 
    is_admin?: boolean
    registration?: Registration
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

export interface Comment extends Base {
    title: string, 
    content: string, 
    user_id: number, 
    reply?: string
}

export interface Period extends Base {
    starts_at: Date, 
    ends_at: Date
}

export interface Result extends Base {
    rank: number, 
    registration_id: number, 
    person: Registration
}

export interface AnnouncementsPageProps extends SharedData {
    announcements: Announcement[], 
    showForm?: boolean
}

export interface RegistrationsPageProps extends SharedData {
    registrations: Registration[], 
    showForm?: boolean
}

export interface DashboardPageProps extends SharedData {
    inPeriod: boolean, 
    registration: Registration | null, 
    comments: Comment[]
}

export interface CommentsPageProps extends SharedData {
    comments: Comment[], 
    showForm?: boolean
}

export interface PeriodsPageProps extends SharedData {
    periods: Period[], 
    showForm?: boolean
}

export interface ResultsPageProps extends SharedData {
    results: Result[], 
    year?: string, 
    showForm?: boolean, 
    people: Registration[]
}

export interface Paginated<T> {
    data: T[], 
    total: number, 
    per_page: number, 
    current_page: number, 
    last_page: number
}

export interface UsersPageProps extends SharedData {
    data: Paginated<User>
}