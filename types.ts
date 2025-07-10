export interface UserDetails {
	id: string,
	first_name: string,
	last_name: string,
	username: string,
	email: string
}

export interface AccountGroup {
    id: string,
    title: string,
    accounts: Account[]
}

export interface Account {
    id: string,
    name: string,
    total: number,
}
