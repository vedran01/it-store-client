export interface UserProfile {
    id: number,
    username?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    phone?: string,
    country?: string,
    city?: string,
    street?: string,
    zip?: string,
    enabled?: boolean
    created?: Date,
    modified?: Date,
    type?: string,
    uuid?: string,
    validFrom?: Date,
    validTill?: Date,
    lastLogin?: Date,
    passwordChanged?: Date,
    enabled2fa?: boolean,
    configured2fa?: boolean,
    profilePicture?: string;
}