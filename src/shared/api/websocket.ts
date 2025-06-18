type WebSocketCallback = (payload: unknown) => void;

class WebSocketService {
  private static instance: WebSocketService;
  private socket: WebSocket | null = null;
  private listeners: Record<string, WebSocketCallback[]> = {};

  private constructor() {}

  public static getInstance(): WebSocketService {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  public connect(url: string): void {
    this.socket = new WebSocket(url);

    this.socket.onopen = () => {
      console.log("WebSocket connected");
    };

    this.socket.onmessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data as string) as {
          type: string;
          payload: unknown;
        };
        this.emit(data.type, data.payload);
      } catch (error) {
        console.error("WebSocket message parsing error:", error);
      }
    };

    this.socket.onclose = () => {
      console.log("WebSocket disconnected");
    };
  }

  public on(event: string, callback: WebSocketCallback): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  public emit(event: string, payload: unknown): void {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      eventListeners.forEach((callback) => callback(payload));
    }
  }

  public send(event: string, payload: unknown): void {
    if (this.socket?.readyState === WebSocket.OPEN) {
      try {
        this.socket.send(JSON.stringify({ type: event, payload }));
      } catch (error) {
        console.error("WebSocket send error:", error);
      }
    }
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
      this.listeners = {};
    }
  }
}

export const webSocketService = WebSocketService.getInstance();
