import "./modal.scss";

export default function ModalWindows({ setActive, active, srcName }) {
  return (
    <div
      className={active ? "modal-window active" : "modal-window"}
      onClick={() => setActive(false)}
    >
      <div className="modal-window__body" onClick={(e) => e.stopPropagation()}>
        {<img src={srcName}></img>}
      </div>
    </div>
  );
}
