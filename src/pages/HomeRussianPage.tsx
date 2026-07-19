import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesMediaSimple from "@/components/sections/features/FeaturesMediaSimple";
import ContactCta from "@/components/sections/contact/ContactCta";
export default function HomeRussianPage() {
  return (
    <div className="min-h-svh bg-background text-foreground flex flex-col">
      
      <main className="flex-grow">
        <HeroBillboard
          tag="Добро пожаловать"
          title="Инновационные решения для вашего бизнеса"
          description="Мы помогаем транспортным компаниям масштабироваться с помощью надежной диспетчерской поддержки Amazon Relay и круглосуточного управления грузами."
          primaryButton={{ text: "Начать работу", href: "#contact" }}
          secondaryButton={{ text: "Узнать больше", href: "#about" }}
          textAnimation="fade-blur"
          imageSrc="https://picsum.photos/seed/869016166/1200/800"
        />

        <FeaturesMediaSimple
          tag="Наши преимущества"
          title="Быстрая интеграция и надежность"
          description="Мощные инструменты и профессиональная команда, которые помогут вам масштабировать ваш бизнес и увеличить прибыль."
          items={[
            {
              title: "Быстрая интеграция",
              description: "Мгновенное подключение к нашим диспетчерским услугам для бесперебойной работы вашего автопарка.",
              imageSrc: "https://picsum.photos/seed/2083480702/1200/800"
            },
            {
              title: "Надежность 24/7",
              description: "Круглосуточная поддержка и мониторинг грузов, чтобы вы всегда были уверены в результате.",
              imageSrc: "https://picsum.photos/seed/1983902514/1200/800"
            },
            {
              title: "Максимальная прибыль",
              description: "Оптимизация маршрутов и эффективное управление загрузками для роста вашего дохода.",
              imageSrc: "https://picsum.photos/seed/1788016253/1200/800"
            }
          ]}
          textAnimation="slide-up"
        />

        <ContactCta
          tag="Готовы начать?"text="Свяжитесь с нашей командой сегодня"
          primaryButton={{ text: "Оставить заявку", href: "#contact" }}
          secondaryButton={{ text: "Написать в Telegram", href: "https://t.me/un1tedteam" }}
          textAnimation="fade-blur"
        />
      </main>

    </div>
  );
}