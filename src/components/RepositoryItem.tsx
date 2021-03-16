import { Repository } from "./RepositoriesList";

type RepositoryItemProps = {
  repository: Repository;
};

export const RepositoryItem = ({ repository }: RepositoryItemProps) => (
  <li>
    <strong>{repository.name}</strong>
    <p>{repository.description}</p>

    <a href={repository.html_url}>Acessar repositório</a>
  </li>
);
