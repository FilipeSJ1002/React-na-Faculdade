function WidthInput({ width, setWidth }: { width: number, setWidth: (value: number) => void }) {
    return (
        <div>
            <label htmlFor='colorInput'>Digite o tamanho do botão   : </label>
            <input
                type='text'
                id='widthInput'
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
            />
        </div>
    );
}
export default WidthInput;