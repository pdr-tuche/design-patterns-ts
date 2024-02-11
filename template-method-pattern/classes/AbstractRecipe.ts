export default abstract class AbstractRecipe {
    public abstract prepare(): void;
    public abstract bake(): void;
    public abstract takeOut(): void;
    public abstract cut(): void;
}