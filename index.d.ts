declare module "is-valid-birthdate" {
  interface Options {
    maxAge?: number;
    minAge?: number;
  }

  export default function isValidBirthdate(
    date: Date,
    options?: Options
  ): boolean;
}
