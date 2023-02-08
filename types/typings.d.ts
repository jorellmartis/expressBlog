export type PostProps = {
    title: string
    author: string
    dateCreated: string
    description?: string
} 
export type CategoryCardProps = {
    logo: JSX.Element | string,
    title: string,
    description: string
}