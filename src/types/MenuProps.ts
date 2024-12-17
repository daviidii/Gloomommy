interface MenuSublinkProps {
  link: string;
  name: string;
}

export interface MenuProps {
  id: number;
  name: string;
  link: string;
  subLink: MenuSublinkProps[] | [];
}
