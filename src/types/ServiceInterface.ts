export interface FetchUserOption {
  page: number;
  result: number;
  seed: string;
}
export interface ResponseUser {
  results: User[];
  info: Info;
}
export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}
export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
export class CurrentUser implements User {
  gender = "";
  name = { title: "", first: "", last: "" };
  location= {
    street: { number: 0, name: "" },
    city: "",
    state: "",
    country: "",
    postcode: "",
    coordinates: { latitude: "", longitude: "" },
    timezone: { offset: "", description: "" },
  };
  email = "";
  phone = "";
  cell = "";
  id = { name: "", value: "" };
  picture = { large: "", medium: "", thumbnail: "" };
  nat = "";
  constructor(user?: User) {
    if (user) {
      Object.assign(this, user);
    }
  }
}
export interface SetUserParams {
  email: string;
  fistName: string;
  lastName: string;
  id: number;
}
