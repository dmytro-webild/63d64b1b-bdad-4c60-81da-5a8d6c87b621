import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesMediaSimple from "@/components/sections/features/FeaturesMediaSimple";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function HomeRussianPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Вебилд"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Начать", href: "/contact" }}
      />
      
      <main className="flex-grow">
        <HeroBillboard
          tag="Новая эра"
          title="Создавайте потрясающие сайты быстрее"
          description="Платформа для создания современных веб-приложений с невероятной скоростью и качеством. Ускорьте свой рабочий процесс."
          primaryButton={{ text: "Начать бесплатно", href: "/signup" }}
          secondaryButton={{ text: "Узнать больше", href: "/about" }}
          textAnimation="fade-blur"
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
        />

        <FeaturesMediaSimple
          tag="Возможности"
          title="Всё, что нужно для успеха"
          description="Мощные инструменты, которые помогут вам масштабировать ваш бизнес и создавать лучшие продукты для ваших клиентов."
          items={[
            {
              title: "Быстрая разработка",
              description: "Используйте готовые компоненты для значительного ускорения процесса создания интерфейсов.",
              imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            },
            {
              title: "Современный дизайн",
              description: "Адаптивные интерфейсы, которые выглядят отлично на любом устройстве и разрешении экрана.",
              imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
            },
            {
              title: "Надежная архитектура",
              description: "Построено на передовых технологиях для обеспечения максимальной производительности и безопасности.",
              imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
            }
          ]}
          textAnimation="slide-up"
        />

        <ContactCta
          tag="Готовы начать?"
          text="Запустите свой следующий проект сегодня"
          primaryButton={{ text: "Создать аккаунт", href: "/signup" }}
          secondaryButton={{ text: "Связаться с отделом продаж", href: "/contact" }}
          textAnimation="fade-blur"
        />
      </main>

      <FooterSimple
        brand="Вебилд"
        copyright="© 2024 Вебилд. Все права защищены."
        columns={[
          {
            title: "Продукт",
            items: [
              { label: "Функции", href: "/features" },
              { label: "Цены", href: "/pricing" },
              { label: "Обновления", href: "/changelog" }
            ]
          },
          {
            title: "Компания",
            items: [
              { label: "О нас", href: "/about" },
              { label: "Блог", href: "/blog" },
              { label: "Контакты", href: "/contact" }
            ]
          }
        ]}
        links={[
          { label: "Условия использования", href: "/terms" },
          { label: "Политика конфиденциальности", href: "/privacy" }
        ]}
      />
    </div>
  );
}