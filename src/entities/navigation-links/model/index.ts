import { ref } from "vue";
import { INavLink } from "@shared/ui/navbar";

export const useNavigationLinks = () => {
  const links = ref<INavLink[]>([
    { to: "/", name: "Home" },
    { to: "/profile", name: "Profile" },
  ]);

  /*
     Тут может быть своя логика по получению и установления данных с сервера
     или же какая-нибудь фильтрация по условным permission's
   */

  return {
    links,
  };
};
