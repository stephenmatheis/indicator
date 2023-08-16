import { PromptsProvider } from '@/contexts/prompts';
import { Console } from '@/components/console';
import { Footer } from '@/components/footer';
import { Controller } from '@/components/controller';
import styles from './page.module.scss';

export function Page({ children, noFooter = false, ...props }) {
    const { links, text } = props;

    return (
        <PromptsProvider>
            <div className={styles.page} data-page>
                {children}
                {!noFooter && <Footer links={links} text={text} />}
                <Console />
            </div>
            <Controller />
        </PromptsProvider>
    );
}
