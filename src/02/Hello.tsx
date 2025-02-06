interface Props {
    name: string;
    Lang?: string;
}

export default function Hello({ name, Lang }: Props) {
    if (Lang === "en") {
        return (
            <div>
                Welcome <strong>{name}</strong>
            </div>
        );
    }
    return (
        <div>
            Bienvenue <strong>{name}</strong>
        </div>
    );
}