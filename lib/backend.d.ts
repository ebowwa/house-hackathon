// lib/backend.d.ts

declare namespace Backend {
  /**
   * Represents the configuration options for the Flask application.
   */
  interface AppConfig {
    UPLOAD_FOLDER: string;
    OUTPUT_FOLDER: string;
  }

  /**
   * Describes the structure and capabilities of the VideoSpeechProcessor class
   * used in the backend for processing video files and generating speech.
   */
  interface VideoSpeechProcessor {
    new (args: {
      video_file_path: string;
      target_frame_rate: number;
      prompt_path: string;
      project_uuid: string;
      voice_uuid: string;
    }): VideoSpeechProcessor;

    /**
     * Processes the video file and generates speech, returning details about
     * the processed audio and video.
     */
    process_video_and_generate_speech(): Promise<{
      audio_files: string[];
      total_text_length: number;
      total_audio_duration: number;
      video_duration: number;
    }>;

    /**
     * Concatenates multiple audio files into a single output file.
     */
    static concatenate_audio_files(audioFiles: string[], outputAudioPath: string): Promise<void>;

    /**
     * Overlays an audio file onto a video file, producing a new video file
     * with the combined audio and visual tracks.
     */
    static overlay_audio(videoFilePath: string, audioFilePath: string, outputVideoPath: string): Promise<void>;
  }

  /**
   * Utility function to check if a file has an allowed extension.
   */
  function allowed_file(filename: string): boolean;
}
