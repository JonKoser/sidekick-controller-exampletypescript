interface whisperParamsIfc {
    icon: string,
    label: string,
    markdown: string,
    style: styleIfc
}
export interface hostIfc {
    emitWhisper(_: whisperParamsIfc): null
}

export interface styleIfc {
    backgroundColor: string,
    highlightColor: string,
    primaryColor: string
}

interface eventDataIfc {
    text?: string
}
export interface eventIfc {
    data: eventDataIfc
}

export interface configIfc {
    foo: string
}