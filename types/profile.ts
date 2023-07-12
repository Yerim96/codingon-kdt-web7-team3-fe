export interface ProfileType {
  id: string;
  name: string;
  information: string;
}

export interface PostType {
  id: string;
  content: string;
}

export interface CreateProfileType {
  name: string;
  information: string;
}

export interface ProfilesData {
  profiles: ProfileType[];
}

export interface Tag {
  id: string;
  tagname: string;
}

export interface ProfilePageData extends ProfileType {
  posts: PostType[];
  tags: Tag[];
  follows: ProfileType[];
  followers: ProfileType[];
}
