import { Section } from './Section';
import { Card } from '@/components/ui/card';
import { Home, ArrowUpRight, ArrowUpCircleIcon } from "lucide-react";
import Link from 'next/link';

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
                    Side Project
                    <p className="text-lg text-muted-foreground">
                        Epitech Project
                    </p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject 
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url="/"
                            />
                        ))}
                    </div>
                    </Card>
            </div>
                <div className="flex-[2] w-full flex flex-col gap-4">
                    <Card className="p-4 flex-1">
                        <p className="text-lg text-muted-foreground">
                            Work
                        </p>
                        <br />
                        <p>No experience yet</p>
                    </Card>
                    <Card className="p-4 flex-1 flex flex-col gap-2">
                        <p className="text-lg text-muted-foreground">Contact me</p>
                        <Link href="https://www.instagram.com/lucas_pse_/">
                        <ContactCard name="lucas_pse_" image="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/dceec7ae0aeecf78e9c30d37d75a8be5-1732526400091/d431c970-8273-4be9-bd89-589732fdbeeb.jpg" mediumImage="data:image/jpeg;base64,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" description="179 abonnés" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/lucas-pose-1063a4339/">
                        <ContactCard name="Lucas POSE" image="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/dceec7ae0aeecf78e9c30d37d75a8be5-1732526400091/d431c970-8273-4be9-bd89-589732fdbeeb.jpg" mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" description="Développeur indépendant" />
                        </Link>
                        </Card>
                        <Card className="p-4 flex-1">
                        <p className="text-lg text-muted-foreground">
                        Curriculum vitae
                        </p>
                        <br />
                        <Card className="flex-1 flex justify-center hover:bg-accent/50 transition-colors">
                            <div>
                                <a className="text-primary" href="https://drive.google.com/file/d/1LIsXE0oeWSMfXFIXXx0Fy0gFWmsx-Kw5/view?usp=sharing" download="CV-LucasPOSE.png">Télécharger Mon CV</a>
                                <ArrowUpCircleIcon className="inline ml-2" size={16} />
                            </div>
                        </Card>
                    </Card>
                </div>
        </Section>
    );
}

import { Terminal } from "lucide-react";

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Terminal,
        title: "Project my_printf",
        description: "Recode the printf function."
    },
    {
        Logo: Terminal,
        title: "Project 101pong",
        description: "Simulation of a 3D pong game."
    },
    {
        Logo: Terminal,
        title: "Project myls",
        description: "Recode the ls function."
    },
];

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
}

const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 rounded-md hover:bg-accent/50 transition-colors p-2">
            <span className="bg-accent text-accent-forground p-3 rounded-sm">
                <props.Logo size={16} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">
                    {props.description}
                </p>
            </div>
        </Link>
    )
}

const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
}) => {
    return (
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors flex items-center gap-4 group">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
                <img src={props.mediumImage} alt={props.name} className="h-4 w-4 -bottom-1 -right-1 absolute bottom-0 right-0 rounded-sm" />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" size={16} />
        </Card>
    )
}