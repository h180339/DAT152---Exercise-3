package hvl.dat152.model;

import hvl.dat152.model.Task.Status;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class TaskStatus {

	private Status status;

	public TaskStatus() {
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
}
