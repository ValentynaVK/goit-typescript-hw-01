export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type Role = Record<UserRole, string>;

const RoleDescription: Role = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
